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
exports.userLogin = exports.userSignIn = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = 'azdrfnioe154998wsajbhhidcgiydg5d897c4shvgsggss4514';
const userSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oldUser = yield UserModel_1.default.findOne({ username: req.body.username });
    if (oldUser === undefined || oldUser === null) {
        try {
            const salt = yield bcrypt_1.default.genSalt();
            const hashedPassword = yield bcrypt_1.default.hash(req.body.password, salt);
            const NewUser = new UserModel_1.default({
                username: req.body.username,
                password: hashedPassword,
                HealthandHygine: [],
                CommunicationSkills: [],
                PresentationSkills: [],
                TechnicalSkills: [],
                PhysicalAppearance: [],
            });
            yield NewUser.save();
            res.send({ message: "new user created" }).status(200);
        }
        catch (error) {
            console.error(error);
            res.status(500);
        }
    }
    else {
        res.send({ message: 'user already exists' });
    }
});
exports.userSignIn = userSignIn;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oldUser = yield UserModel_1.default.findOne({ username: req.body.username });
    if (oldUser === undefined || oldUser === null) {
        res.status(400).send({ message: "user does not exist, please register" });
    }
    else {
        try {
            if (yield bcrypt_1.default.compare(req.body.password, oldUser.password)) {
                const accessToken = jsonwebtoken_1.default.sign(req.body.username, secret);
                res.status(200).json({ message: "welcome user", token: accessToken });
            }
            else {
                res.status(401).send({ message: "wrong password" });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500);
        }
    }
});
exports.userLogin = userLogin;
