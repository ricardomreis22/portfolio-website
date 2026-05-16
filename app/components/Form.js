"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const initalValues = { username: "", email: "", phone: "", message: "" };
  const [formValues, setFormValues] = useState(initalValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_qzk2xnj",
          "template_9q33afm",
          form.current,
          "Nsx4ux97eaNqdEKJC"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormValues(initalValues);
    }
  }, [formErrors]);

  const validate = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formValues.username) {
      errors.username = "Username is required!";
    }
    if (!formValues.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(formValues.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!formValues.phone) {
      errors.phone = "Phone is required!";
    }
    if (!formValues.message) {
      errors.message = "Message is required!";
    }

    return errors;
  };

  return (
    <div className="flex flex-col mt-4 mx-4  xl:w-full text-white">
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <p className="text-xl font-bold text-white">
          Email sent sucessfully!
        </p>
      )}

      <form
        className="flex flex-col mt-4 mx-4"
        ref={form}
        onSubmit={handleSubmit}
      >
        <label className="font-bold text-white">Name</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          className="mb-2 mt-2 rounded-xl border border-white/30 bg-white/10 p-2 text-white placeholder:text-white/50"
        />
        <p className="text-red-500 font-bold text-md mb-4">
          {formErrors.username}
        </p>
        <label className="font-bold text-white">Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="mb-2 mt-2 rounded-xl border border-white/30 bg-white/10 p-2 text-white placeholder:text-white/50"
        />
        <p className="text-red-500 font-bold text-md mb-4 ">
          {formErrors.email}
        </p>
        <label className="font-bold text-white">Phone</label>
        <input
          type="phone"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          className="mb-2 mt-2 rounded-xl border border-white/30 bg-white/10 p-2 text-white placeholder:text-white/50"
        />
        <p className="text-red-500 font-bold text-md mb-4">
          {formErrors.phone}
        </p>
        <label className="font-bold text-white">Message</label>
        <textarea
          name="message"
          className="mt-2 rounded-xl border border-white/30 bg-white/10 p-2 text-white placeholder:text-white/50"
          rows="6"
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
        <p className="text-red-500 font-bold text-md mb-8 ">
          {formErrors.message}
        </p>
        <input
          type="submit"
          className="h-auto cursor-pointer rounded-full border border-solid border-white bg-transparent px-6 py-1 text-center font-bold text-white hover:bg-white/15"
          value="Submit"
        />{" "}
      </form>
    </div>
  );
};

export default Form;
