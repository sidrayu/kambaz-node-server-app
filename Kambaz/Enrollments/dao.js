import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(courseId, userId) {
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId }
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}
export function unenrollUserInCourse(courseId, userId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}
export function findEnrollment(courseId, userId) {
  const { enrollments } = Database;
  return enrollments.find(
    (enrollment) => enrollment.course === courseId && enrollment.user === userId
  );
}
export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}
