import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllCourses() {
  return Database.courses;
}
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}
export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  console.log("Dao newCourse1", newCourse);
  Database.courses = [...Database.courses, newCourse];
  console.log("Dao newCourse2", newCourse);
  return newCourse;
}
