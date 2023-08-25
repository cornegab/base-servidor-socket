import express from 'express';
import { SERVER_PORT } from '../global/environment';
import {Server as SocketIOServer} from 'socket.io';
import http from 'http';

export default class Server {
    public app: express.Application;
    public port: number;

    public io : SocketIOServer;
    private httpServer: http.Server;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = new SocketIOServer(this.httpServer);
    }

    start(callback: any){
        this.httpServer.listen(this.port, callback);
    }
}