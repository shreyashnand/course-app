"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CourseList from "./components/CourseList";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">

      <h1 className="text-2xl font-bold text-black" style={{marginBottom: '2rem'}}>My Courses</h1>
      {/* <div className="my-10">
            <a href="/add-course" className="text-blue-500 block "> Add Course</a>
          </div> */}
      <CourseList />
    </div>
  );
}
