"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)('Student', studentSchema);
