import { Router } from "express";
import { getTasks, createTasks, deleteTasks } from "../controllers/taskControllers";

export const taskRouter: Router = Router()

taskRouter.get('/', getTasks)
taskRouter.post('/', createTasks)
taskRouter.delete('/', deleteTasks)