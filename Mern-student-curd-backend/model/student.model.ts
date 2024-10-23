import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    phoneNumber: { type: String },
    address: { type: String },
    course: { type: String },
    enrollmentDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default model('Student', studentSchema);
