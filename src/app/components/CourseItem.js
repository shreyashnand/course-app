"use client";
import { useState } from "react";
import { useEnrollment } from "../context/context";
import Image from "next/image";

const CourseItem = ({ course }) => {
  const { enrolledCourses, dispatch } = useEnrollment();
  const isEnrolled = enrolledCourses.includes(course.id);
  const [imageSrc, setImageSrc] = useState(course.image)
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-64">
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
        Loading...
      </div>
    )}
    
    <Image
      src={imageSrc}
      alt={course.title || "Course Image"}
      width={300}
      height={200}
      className="w-full h-[200px] object-cover"
      onLoadingComplete={() => setLoading(false)}
      onError={() => {
        setImageSrc("/default.jpg");
        setLoading(false);
      }}
    />
  
    <div className="p-4">
      <h3 className="text-md font-semibold text-gray-800">{course.title}</h3>
      {isEnrolled && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded">
          Enrolled
        </span>
      )}
      <button
        onClick={() => dispatch({ type: "TOGGLE_ENROLL", id: course.id })}
        className={`w-full mt-3 text-sm text-white py-2 rounded ${
          isEnrolled ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isEnrolled ? "Unenroll" : "Enroll"}
      </button>
    </div>
  </div>
  
  );
};

export default CourseItem;
