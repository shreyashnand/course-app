import React, { useContext } from "react";
import { CourseContext } from "./../context/context";

export default function EnrollmentButton({ courseId }) {
  const { state, dispatch } = useContext(CourseContext);
  const isEnrolled = state.enrolledCourses.has(courseId);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_ENROLL", payload: courseId })}
      className={`px-4 py-2 text-white rounded ${
        isEnrolled ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {isEnrolled ? "Unenroll" : "Enroll"}
    </button>
  );
}
