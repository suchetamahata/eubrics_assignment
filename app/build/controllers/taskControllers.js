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
exports.deleteTasks = exports.createTasks = exports.getTasks = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const type = req.body.type;
        const oldUser = yield UserModel_1.default.findOne({ username: req.body.user });
        if (oldUser == null) {
            res.send("user not found");
        }
        else {
            switch (type) {
                case 'CommunicationSkills':
                    res.send({ data: oldUser.CommunicationSkills });
                    break;
                case 'HealthandHygine':
                    res.send({ data: oldUser.HealthandHygine });
                    break;
                case 'PresentationSkills':
                    res.send({ data: oldUser.PresentationSkills });
                    break;
                case 'TechnicalSkills':
                    res.send({ data: oldUser.TechnicalSkills });
                    break;
                default:
                    res.send({ data: oldUser.PhysicalAppearance });
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "server error" });
    }
});
exports.getTasks = getTasks;
const createTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const type = req.body.type;
        const oldUser = yield UserModel_1.default.findOne({ username: req.body.user });
        if (oldUser == null) {
            res.send("user not found");
        }
        else {
            switch (type) {
                case 'CommunicationSkills':
                    oldUser.CommunicationSkills.push(req.body.task);
                    break;
                case 'HealthandHygine':
                    oldUser.HealthandHygine.push(req.body.task);
                    break;
                case 'PresentationSkills':
                    oldUser.PresentationSkills.push(req.body.task);
                    break;
                case 'TechnicalSkills':
                    oldUser.TechnicalSkills.push(req.body.task);
                    break;
                default:
                    oldUser.PhysicalAppearance.push(req.body.task);
            }
            const x = yield oldUser.save();
            res.send({ message: "tasks saved" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
exports.createTasks = createTasks;
const deleteTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("delete");
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
exports.deleteTasks = deleteTasks;
