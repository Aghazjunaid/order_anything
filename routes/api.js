var express = require('express'),
apiRouter = express.Router();

user = require('./user/user')();

apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})


//============user api============================
apiRouter.post('/register', user.registerUser);
apiRouter.get('/login', user.loginUser);


module.exports = apiRouter;
