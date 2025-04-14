import * as assignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.get("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignments = await assignmentDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });

    app.post("/api/courses/:courseId/assignments/", async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = await assignmentDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    app.put("/api/courses/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });

    app.get("/api/courses/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = await assignmentDao.findAssignmentById(assignmentId);
        res.json(assignment);
    });

    app.delete("/api/courses/assignments/:assignmentId", async (req, res) => {
        console.log("Deleting assignment:", req.params);
        
        const { assignmentId } = req.params;
        const status = await assignmentDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}
