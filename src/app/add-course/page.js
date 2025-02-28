"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { addCourse } from "../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().url("Valid image URL is required"),
});

export default function AddCourse() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  const onSubmit = async (data) => {
    await addCourse(data);
    router.refresh();
    router.push("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input {...register("title")} placeholder="Title" className="w-full p-2 border rounded" />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
          <input {...register("description")} placeholder="Description" className="w-full p-2 border rounded" />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
        <div>
          <input {...register("image")} placeholder="Image URL" className="w-full p-2 border rounded" />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>
        <button type="submit" style={{marginTop:"1rem"}} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add Course
        </button>
      </form>
    </div>
  );
}
