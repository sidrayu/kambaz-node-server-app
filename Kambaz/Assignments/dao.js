import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function updateAssignment(assignment) {
    const { assignments } = Database;
    const assignmentToUpdate = assignments.find((a) => a._id === assignment._id);
    Object.assign(assignmentToUpdate, assignment);
    return assignmentToUpdate;
}   

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignments) => assignments.course === courseId);
}

