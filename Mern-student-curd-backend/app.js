"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = __importDefault(require("./routes/student.route"));
require("./config/db.config"); // Connect to MongoDB
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS
app.use(express_1.default.json());
app.use('/api', student_route_1.default);
exports.default = app;
