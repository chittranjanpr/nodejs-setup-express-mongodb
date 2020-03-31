const router = require('express').Router();

class UserRouter {
    constructor(controller) {
        this.controller = controller;
        this.init();
    }

    init() {
        router.post('/login', async (req, res) => {
            try {
                console.log("121", req)
                const response = await this.controller.login(req.body.username, req.body.password);
                console.log("303", req)
                // res.json(response);
            } catch (err) {
                res.json({ code: 500, msg: 'An error occurred' });
            }
        });
    }

    getRouter() {
        return router;
    }
}

module.exports = (controller) => { return new UserRouter(controller) };