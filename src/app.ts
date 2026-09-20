import { envs } from './config/envs.ts';
import { Server } from './presentation/server.ts';
import { AppRouter } from './presentation/routes.ts'

function main(){

    const restServer = new Server({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH,
        routes: AppRouter.routes
    });

    restServer.start()

}

(async ()=>{

    main();

})();

