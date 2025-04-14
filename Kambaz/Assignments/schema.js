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
