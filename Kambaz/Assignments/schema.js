import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
    {
        _id: String,
        courseId: {
            type: String,
            ref: "CourseModel",
            required: true,
        },
        title: { type: String, required: false },
        modules: { type: String, required: false },
        availableFromDate: { type: Date, required: false },
        availableUtilDate: { type: Date, required: false },
        dueDate: { type: Date, required: false },
        points: { type: Number, required: false },
        description: { type: String, required: false }
    },
    { collection: "assignments" }
);

export default assignmentSchema;


// "_id": "A103",
// "courseId": "RS101",
// "title": "Nozzle Design Project",
// "modules": "Module 3",
// "availableFromDate": "2025-03-01",
// "availableUtilDate": "2025-01-01",
// "dueDate": "2025-03-15",
// "points": 100,
// "description": "This assignment is about the nozzle design of the aircrafts."