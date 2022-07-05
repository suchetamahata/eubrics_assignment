"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const taskControllers_1 = require("../controllers/taskControllers");
exports.taskRouter = (0, express_1.Router)();
exports.taskRouter.post('/', taskControllers_1.getTasks);
exports.taskRouter.post('/create', taskControllers_1.createTasks);
exports.taskRouter.delete('/', taskControllers_1.deleteTasks);
