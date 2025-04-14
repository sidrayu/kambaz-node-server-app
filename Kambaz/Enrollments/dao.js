import model from "./model.js";

export async function findEnrollment(courseId, userId) {
  return await model.find({ course: courseId, user: userId });
}

export async function findEnrollmentsForUser(userId) {
  return await model.find({ user: userId });
}

export async function findEnrollmentsForCourse(courseId) {
  return await model.find({ course: courseId });
}

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
}

export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
