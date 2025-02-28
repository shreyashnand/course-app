export const fetchCourses = async () => {
    const res = await fetch('https://cartedo-mock-api-d9672364e747.herokuapp.com/api/courses', {cache: 'no-store'});
 
    return res.json();
}

export const addCourse = async (courseId)  => {
    const res = await fetch('https://cartedo-mock-api-d9672364e747.herokuapp.com/api/courses', {
        method: 'POST',
        headers:{'Content-Type': "application/json"},
        body: JSON.stringify(courseId)
    });
    return res.json();
}