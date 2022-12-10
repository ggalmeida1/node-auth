import { Request, Response, NextFunction } from 'express'

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        let success = true

        //Fazer processo de autorizacao

        if (success) {
            next()
        } else {
            res.status(403) //Not Authorized
            res.json({ error: 'Not Authorized' })
        }
    }
}