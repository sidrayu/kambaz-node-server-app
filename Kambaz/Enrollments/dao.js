import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

// export function enrollUserInCourse(courseId, userId) {
//   const newEnrollment = { _id: uuidv4(), user: userId, course: courseId }
//   Database.enrollments = [...Database.enrollments, newEnrollment];
//   return newEnrollment;
// }

// export function unenrollUserInCourse(courseId, userId) {
//   const { enrollments } = Database;
//   Database.enrollments = enrollments.filter(
//     (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
//   );
// }
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
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
//  export function enrollUserInCourse(user, course) {
//   return model.create({ user, course, _id: `${user}-${course}` });
//  }
//  export function unenrollUserFromCourse(user, course) {
//   return model.deleteOne({ user, course });
//  }
export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

