"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./authentication");
const Router_1 = require("./routes/Router");
const userRoutes_1 = require("./routes/userRoutes");
const taskRoutes_1 = require("./routes/taskRoutes");
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', userRoutes_1.userRouter);
app.use('/get-behaviours', Router_1.nameRouter);
app.use('/task', authentication_1.authentication, taskRoutes_1.taskRouter);
app.use(express_1.default.static(path_1.default.join(__dirname, './build')));
app.listen(process.env.PORT, () => console.log("app listening "));
mongoose_1.default.connect("mongodb+srv://sucheta:moonstar*@cluster0.uolwybx.mongodb.net/eubrics_data?retryWrites=true&w=majority" || '', (err) => {
    if (err) {
        console.log('Cant connect to db');
    }
    else {
        console.log('Connected to db');
    }
});
app.use('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'build/index.html'));
});
