import { Request, Response } from 'express';
import Student from '../model/student.model';

// Create a new student
export const createStudent = async (req: Request, res: Response) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
};

// Get all students
export const getStudents = async (req: Request, res: Response) => {
    try {
        const students = await Student.find();
        res.json(students);
        console.log("asghsgas");

    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
        console.log("error");
    }
};

// Get a single student
export const getStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student' });
    }
};

// Update a student
export const updateStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
};

// Delete a student
export const deleteStudent = async (req: Request, res: Response) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student' });
    }
};
