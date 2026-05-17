import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#191d2b] p-8 text-center text-white">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link href="/" className="underline">
        Back to home
      </Link>
    </div>
  );
}
