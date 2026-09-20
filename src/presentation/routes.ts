
import { Router } from 'express';
import { TodoRoutes } from './todos/routes.ts';


export class AppRouter {
    
    static get routes(): Router {

        const router = Router();

        router.get('/', (req, res)=>{
            res.status(200).json({
                server: 'running..',
                status: 'live'
            });
        });

        router.use('/api/v1/todos', TodoRoutes.routes )

        return router;
    }

}

