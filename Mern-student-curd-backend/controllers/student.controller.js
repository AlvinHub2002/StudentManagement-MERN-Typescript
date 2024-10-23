"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudent = exports.getStudents = exports.createStudent = void 0;
const student_model_1 = __importDefault(require("../model/student.model"));
// Create a new student
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = new student_model_1.default(req.body);
        yield student.save();
        res.status(201).json(student);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
});
exports.createStudent = createStudent;
// Get all students
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_model_1.default.find();
        res.json(students);
        console.log("asghsgas");
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
        console.log("error");
    }
});
exports.getStudents = getStudents;
// Get a single student
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_model_1.default.findById(req.params.id);
        res.json(student);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching student' });
    }
});
exports.getStudent = getStudent;
// Update a student
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(student);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
});
exports.updateStudent = updateStudent;
// Delete a student
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield student_model_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting student' });
    }
});
exports.deleteStudent = deleteStudent;
