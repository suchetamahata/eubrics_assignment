"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/user-sign-in', userController_1.userSignIn);
exports.userRouter.post('/user-log-in', userController_1.userLogin);
