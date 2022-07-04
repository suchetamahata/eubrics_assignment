import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
const secret = 'azdrfnioe154998wsajbhhidcgiydg5d897c4shvgsggss4514'
type ReqWithUser = Request & { loggedUser: string| JwtPayload}

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader 
        //const token = authHeader && authHeader?.split(' ')[1]
        //console.log(authHeader)
        if (token == null) {
            res.sendStatus(401)
        } else {
            jwt.verify(token, secret, (err, username) => {
                if (err) return res.sendStatus(403)
                if(username)  req.body.user = username
                next();
            })
        }
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(500).send(error.message)
            console.log(error.name, error.message)
        }
    }
}