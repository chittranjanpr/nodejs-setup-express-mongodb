// const express = require('express');
// const config = require('../config/config.js')
// const app = express();
// const Port = 5500;

// app.get('/', function (req, res) {
//     console.log("my 121")
//     res.send("hyyy")
// })

// app.listen(Port, function () {
//     console.log(`App running on port ${config[`${process.env.NODE_ENV}`].port}`);
// })




// global.env = process.env.NODE_ENV === undefined ? 'development' : 'production';
const express = require('express');
const config = require('../config/config.js')
const app = express();
const Port = config[`${process.env.NODE_ENV}`].port;

class Server {
    constructor() {
        this.models = [];
        this.init();
    }
    async init() {
        try {
            // await this.initModels();
            this.initControllers();
            // this.initExpress();
            this.initRoutes();
            this.initServer();
            // rpc_client.start();
        }
        catch (err) {
            // global.log.error(err);
        }
    }

    // async initModels() {
    //     this.mongodb = await mongo.init();
    // }

    // initExpress() {
    //     //Enable request compression
    //     app.use(cors());
    //     app.use(compression());
    //     app.use(bodyParser.json());       // to support JSON-encoded bodies
    //     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    //         extended: true
    //     }));
    //     app.use(express.static('public'));
    //     nunjucks.configure('./views', {
    //         autoescape: true,
    //         express: app
    //     });
    // }

    initServer() {
        app.listen(Port, () => {
            console.log(`[EXPRESS SERVER] Server running in  http://localhost:${Port}`);
        });
    }
    initControllers() {
        this.userController = require('../controllers/user');
    }
    initRoutes() {
        // app.use('/api', async (req, res, next) => {
        //     if (req.path === '/user/login') {
        //         next();
        //         return;
        //     }
        //     try {
        //         const token = req.headers['x-access-token'];
        //         if (!token) {
        //         }
        //         if (token === undefined) {

        //             res.json({ code: 403, msg: 'Access Denied' });
        //             res.end();
        //             return;
        //         }
        //         else {
        //             const decoded = await jwt.verify(token);
        //             if (decoded.role !== 'admin') {
        //                 res.json({ code: 403, msg: 'Access Denied' });
        //                 res.end();
        //                 return;
        //             }
        //         }
        //     }
        //     catch (err) {
        //         res.json({ code: 403, msg: 'Access Denied' });
        //         res.end();
        //         return;
        //     }
        //     next();
        // });
        const UserRouter = require('../routes/user')(this.userController);
        app.use('/api/user', UserRouter.getRouter());
    }
    // onClose() {
    //     //Close all DB Connections
    //     models.sequelize.close().then(() => console.log('Database connection closed successfully.'));
    //     HttpServer.close();
    // }
}

const server = new Server();
// [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
//     process.on(eventType, (err) => {
//         mongo.closeConnection();
//         server.onClose();
//         process.exit(0);
//     });
// });