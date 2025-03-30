import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.post("/api/courses/:courseId/users/:userId/enrollments", (req, res) => {
    const { courseId, userId } = req.params;
    const newEnrollment = dao.enrollUserInCourse(courseId, userId);
    res.send(newEnrollment);
  });

  app.get("/api/courses/:courseId/users/:userId/enrollments", (req, res) => {
    const { courseId, userId } = req.params;
    const enrollment = dao.findEnrollment(courseId, userId);
    res.json(enrollment);
  });

  app.delete("/api/courses/:courseId/users/:userId/enrollments", (req, res) => {
    const { courseId, userId } = req.params;
    const status = dao.unenrollUserInCourse(courseId, userId);
    res.send(status);
  });

  app.get("/api/courses/users/:userId/enrollments", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  });
}
