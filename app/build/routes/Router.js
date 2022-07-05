"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameRouter = void 0;
const express_1 = require("express");
const behaviourController_1 = require("../controllers/behaviourController");
exports.nameRouter = (0, express_1.Router)();
exports.nameRouter.get('/', behaviourController_1.getNames);
