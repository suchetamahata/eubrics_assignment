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
exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = 'azdrfnioe154998wsajbhhidcgiydg5d897c4shvgsggss4514';
const authentication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader;
        //const token = authHeader && authHeader?.split(' ')[1]
        if (token == null) {
            res.sendStatus(401);
        }
        else {
            jsonwebtoken_1.default.verify(token, secret, (err, username) => {
                if (err)
                    return res.send({ message: " not authorized" });
                if (username)
                    req.body.user = username;
                next();
            });
        }
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            res.status(500).send({ message: "server error" });
            console.log(error.name, error.message);
        }
    }
});
exports.authentication = authentication;
