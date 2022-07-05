"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    HealthandHygine: {
        type: Array
    },
    CommunicationSkills: {
        type: Array
    },
    PresentationSkills: {
        type: Array
    },
    TechnicalSkills: {
        type: Array
    },
    PhysicalAppearance: {
        type: Array
    },
});
exports.default = mongoose_1.default.model("users", userSchema);
