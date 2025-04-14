import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";


export function createAssignmentSync(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function updateAssignmentSync(assignment) {
  const { assignments } = Database;
  const assignmentToUpdate = assignments.find((a) => a._id === assignment._id);
  Object.assign(assignmentToUpdate, assignment);
  return assignmentToUpdate;
}

export function deleteAssignmentSync(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function findAssignmentsForCourseSync(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.courseId === courseId);
}

export function findAssignmentByIdSync(assignmentId) {
  const { assignments } = Database;
  return assignments.find((assignment) => assignment._id === assignmentId);
}


export async function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}

export async function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export async function findAssignmentsForCourse(courseId) {
  return await model.find({ courseId: courseId });
}

export async function findAssignmentById(assignmentId) {
  return await model.findOne({ _id: assignmentId });
}