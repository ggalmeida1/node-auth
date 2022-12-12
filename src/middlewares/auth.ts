import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from '../models/User'

dotenv.config()

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success = true

        //Fazer processo de autorizacao
        if (req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ')

            if (authType === 'Bearer') {
                try {
                    const decoded = JWT.verify(token, process.env.JST_SECRET_KEY as string)

                    success = true
                } catch (error) {
                    
                }
            }
        }

        if (success) {
            next()
        } else {
            res.status(403) //Not Authorized
            res.json({ error: 'Not Authorized' })
        }
    }
}