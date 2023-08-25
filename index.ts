import bodyParser from "body-parser";
import Server from "./classes/server";
import cors from 'cors';
import { router } from "./routes/router";

const server = new Server();

server.start( () => {
    console.log(`Server funcionando en el puerto ${server.port}`);
});

//BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));

//CORS
server.app.use( cors({ origin: true, credentials: true  }));

//Rutas
server.app.use('/', router);

