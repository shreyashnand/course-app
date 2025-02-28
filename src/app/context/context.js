"use client";
import { createContext, useReducer, useContext } from "react";
const EnrollmentContext = createContext(null);

const enrollmentReducer = (state,action) => {
    switch(action.type) {
        case 'TOGGLE_ENROLL':
            return state.includes(action.id) ? state.filter(courseId => courseId !== action.id) : [...state, action.id]
        default:
            return state;
    }
}

export const EnrollmentProvider = ({children}) => {
    const [enrolledCourses, dispatch] = useReducer(enrollmentReducer, []);
    return (
        <EnrollmentContext.Provider value={{enrolledCourses, dispatch}}>
            {children}
        </EnrollmentContext.Provider>
    )
}

export const useEnrollment = () => {
    const context = useContext(EnrollmentContext);
    if(!context){
        throw new Error("Context error")
    }
    return context;
}