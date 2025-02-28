"use client";
import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import { fetchCourses } from "../services/api";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  return loading ? (
    <div className="text-center text-gray-500">Loading...</div>
  ) : (
    <div className="flex flex-wrap gap-4">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
