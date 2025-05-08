"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the shape of form data
type FormValues = {
  name: string;
  email: string;
  message: string;
};

const BookDemoPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10"
    >
      <div className="mb-4">
        <label className="block mb-1 font-normal">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-normal">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-normal">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full border border-gray-300 p-2 rounded h-32"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="shq-btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BookDemoPage;
