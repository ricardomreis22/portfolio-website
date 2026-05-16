"use client";

import React, { useEffect, useRef } from "react";
import { TECH } from "./techData";

const SUBSTEPS = 5;
const WALL_DAMP = 0.998;
const MAX_DT = 0.042;
/** Slow, fixed feel: same speeds every load (px/s), slight variation per pill by index. */
const SPEED_BASE = 38;
const SPEED_INDEX_STEP = 4;
const MAX_SPEED = 72;
/** Below this speed (px/s) pills stay hidden — avoids flicker at rest. */
const MIN_SPEED_TO_SHOW = 9;

const roamPillClass =
  "flex max-w-[11rem] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/35 bg-white/15 px-2 py-1.5 text-white shadow-md sm:gap-2 sm:px-2.5 sm:py-2";

function estimateRadius(name) {
  return Math.min(58, Math.max(30, 20 + name.length * 3.3));
}

function fract(x) {
  return x - Math.floor(x);
}

/** Stable pseudo-random in [0, 1) from index — same every page load. */
function stableUnit(i, salt) {
  return fract(Math.sin(i * 12.9898 + salt * 43758.5453) * 43758.5453);
}

function initialVelocityForIndex(i) {
  const n = TECH.length;
  const angle = ((i + 0.37) / n) * Math.PI * 2 + 0.61;
  const speed = SPEED_BASE + (i % 5) * SPEED_INDEX_STEP;
  return {
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
  };
}

function initialPositionForIndex(i, w, h, r) {
  const u = stableUnit(i, 1.23);
  const v = stableUnit(i, 4.56);
  return {
    x: r + u * Math.max(8, w - 2 * r),
    y: r + v * Math.max(8, h - 2 * r),
  };
}

function clampSpeed(b) {
  const s = Math.hypot(b.vx, b.vy);
  if (s > MAX_SPEED) {
    const k = MAX_SPEED / s;
    b.vx *= k;
    b.vy *= k;
  }
}

function clampBodyToWalls(b, w, h) {
  b.x = Math.max(b.r, Math.min(w - b.r, b.x));
  b.y = Math.max(b.r, Math.min(h - b.r, b.y));
}

function bounceWalls(b, w, h) {
  if (b.x <= b.r) {
    b.x = b.r;
    b.vx = Math.abs(b.vx) * WALL_DAMP;
  } else if (b.x >= w - b.r) {
    b.x = w - b.r;
    b.vx = -Math.abs(b.vx) * WALL_DAMP;
  }
  if (b.y <= b.r) {
    b.y = b.r;
    b.vy = Math.abs(b.vy) * WALL_DAMP;
  } else if (b.y >= h - b.r) {
    b.y = h - b.r;
    b.vy = -Math.abs(b.vy) * WALL_DAMP;
  }
}

/** Push circles apart so they never overlap */
function separateCircles(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  let dist = Math.hypot(dx, dy);
  const minD = a.r + b.r;
  if (dist >= minD) return;
  if (dist < 1e-4) {
    const angle = 2.35619449;
    const push = minD * 0.55;
    a.x -= Math.cos(angle) * push;
    a.y -= Math.sin(angle) * push;
    b.x += Math.cos(angle) * push;
    b.y += Math.sin(angle) * push;
    return;
  }
  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = minD - dist;
  const push = overlap * 0.52;
  a.x -= nx * push;
  a.y -= ny * push;
  b.x += nx * push;
  b.y += ny * push;
}

/** Elastic bounce along collision normal (equal mass) */
function bouncePair(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 1e-6;
  const minD = a.r + b.r;
  if (dist >= minD + 0.02) return;
  const nx = dx / dist;
  const ny = dy / dist;
  const relvx = a.vx - b.vx;
  const relvy = a.vy - b.vy;
  const velAlongN = relvx * nx + relvy * ny;
  if (velAlongN >= 0) return;
  const restitution = 1;
  const impulse = (-(1 + restitution) * velAlongN) / 2;
  const ix = impulse * nx;
  const iy = impulse * ny;
  a.vx -= ix;
  a.vy -= iy;
  b.vx += ix;
  b.vy += iy;
}

function initBodies(w, h) {
  const bodies = TECH.map((_, i) => {
    const { vx, vy } = initialVelocityForIndex(i);
    return {
      x: 0,
      y: 0,
      vx,
      vy,
      r: 0,
    };
  });
  bodies.forEach((b, i) => {
    b.r = estimateRadius(TECH[i].name);
    const p = initialPositionForIndex(i, w, h, b.r);
    b.x = p.x;
    b.y = p.y;
  });
  for (let pass = 0; pass < 60; pass++) {
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        separateCircles(bodies[i], bodies[j]);
      }
    }
    bodies.forEach((b) => clampBodyToWalls(b, w, h));
  }
  return bodies;
}

export default function TechRoamBounce({ mirror = false }) {
  const rootRef = useRef(null);
  const bodiesRef = useRef([]);
  const pillsRef = useRef([]);
  const reducedRef = useRef(false);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const onChange = () => {
      reducedRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let rafId = 0;
    let last = performance.now();

    const applySize = () => {
      const { width, height } = root.getBoundingClientRect();
      sizeRef.current = { w: width, h: height };
      if (width >= 24 && height >= 24) {
        bodiesRef.current = initBodies(width, height);
      }
    };

    const ro = new ResizeObserver(() => {
      applySize();
    });
    ro.observe(root);
    applySize();
    requestAnimationFrame(() => applySize());

    const step = (now) => {
      const { w: W, h: H } = sizeRef.current;
      const rawDt = Math.min(MAX_DT, (now - last) / 1000);
      last = now;

      const bodies = bodiesRef.current;
      if (!reducedRef.current && bodies.length > 0 && W >= 24 && H >= 24) {
        const dt = rawDt / SUBSTEPS;
        for (let s = 0; s < SUBSTEPS; s++) {
          for (const b of bodies) {
            b.x += b.vx * dt;
            b.y += b.vy * dt;
          }
          for (const b of bodies) {
            bounceWalls(b, W, H);
          }
          for (let k = 0; k < 4; k++) {
            for (let i = 0; i < bodies.length; i++) {
              for (let j = i + 1; j < bodies.length; j++) {
                separateCircles(bodies[i], bodies[j]);
              }
            }
            bodies.forEach((b) => clampBodyToWalls(b, W, H));
          }
          for (let i = 0; i < bodies.length; i++) {
            for (let j = i + 1; j < bodies.length; j++) {
              bouncePair(bodies[i], bodies[j]);
            }
          }
          for (const b of bodies) {
            clampSpeed(b);
          }
        }
      }

      const pills = pillsRef.current;
      for (let i = 0; i < bodies.length; i++) {
        const el = pills[i];
        const b = bodies[i];
        if (el && b) {
          el.style.left = `${b.x}px`;
          el.style.top = `${b.y}px`;
          const speed = Math.hypot(b.vx, b.vy);
          const moving =
            !reducedRef.current && speed >= MIN_SPEED_TO_SHOW;
          el.style.opacity = moving ? "0.5" : "0";
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`tech-roam-layer pointer-events-none h-full min-h-[160px] w-full overflow-hidden ${mirror ? "tech-roam-mirror" : ""}`}
      aria-hidden
    >
      {TECH.map(({ name, Icon }, i) => (
        <div
          key={name}
          ref={(el) => {
            pillsRef.current[i] = el;
          }}
          className="tech-roam-bounce-pill absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 ease-out"
        >
          <div className={`${roamPillClass} tech-roam-pill`} title={name}>
            <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
            <span className="text-[10px] font-semibold leading-tight sm:text-xs">
              {name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
