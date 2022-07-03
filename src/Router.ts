import { Router } from "express";
import { getNames } from "./Controller";

export const nameRouter: Router = Router()

nameRouter.get('/', getNames)