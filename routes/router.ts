import {Router, Request, Response} from 'express';

export const router = Router();

router.get('/prueba', (req:Request, res: Response) => {

    res.json({
        mensaje: 'Esta prueba salió correcta',
        ok: true
    });

});