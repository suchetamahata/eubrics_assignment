import users from '../models/UserModel'
import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
    try {
        console.log("get")
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}

export const createTasks = async (req: Request, res: Response) => {
    try {
        console.log(req.body.user)
        const type = req.body.type
        
        const oldUser = await users.findOne({username: req.body.user })
        if( oldUser == null ){
            res.send("user not found")
        } else{
            oldUser.CommunicationSkills.push(req.body.task)
            const x = await oldUser.save()
            res.send(x)
        }
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}

export const deleteTasks = async (req: Request, res: Response) => {
    try {
        console.log("delete")
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}