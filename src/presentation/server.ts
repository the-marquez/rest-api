
import color from 'picocolors';
import express, { Router } from 'express';

interface ServerOptions {
    port?: number;
    publicPath?: string;
    routes: Router;
}

export class Server {

    private port: number;
    private publicPath: string; //public files

    private server: express.Express;
    private routes: Router;
    
    constructor(options: ServerOptions){
        this.port = options.port || 3000;
        this.publicPath = options.publicPath || 'public';
        this.server = express();
        this.routes = options.routes;
    }

    async start(){

        //Middlewares
        this.server.use( express.json() ); // raw -> json
        this.server.use( express.urlencoded({ extended: true }) ); // x-www-urlencoded

        // Public Folder (Static Files)
        this.server.use( express.static( this.publicPath ) );

        // Routes
        this.server.use( this.routes );
        
        const url = `Server is running on: ${color.cyan(`http://localhost:${this.port}`)}`;

        this.server.listen( this.port, ()=> console.log( url ) );

    }

}

