
import behaviours  from "./Model";
import { Request, Response } from "express";

export const getNames = async (req: Request, res: Response) =>{
    try{
        console.log("server c")
        const behaviour = await behaviours.find()
        console.log(behaviour)
        res.send({ data: behaviour}).status(200)
    } catch (error){
        console.error(error);
        res.status(500)
    }
}