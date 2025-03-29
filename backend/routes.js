const express= require('express');
const { postLoginController, postSignUpController } = require('./controllers/auth');
const { getHomeController } = require('./controllers/homeController');
const { isAuth } = require('./middlewares/is-auth');
const router= express.Router();

router.get('/',(req, res, next)=>{
    res.send('<h1>This is the home page</h1>');
})

router.get('/login', (req, res, next)=>{
    res.send("<h1>This is login page</h1>")
});

router.post('/signup', postSignUpController);
router.post('/login', postLoginController);

// router.get('/', isAuth ,getHomeController)

module.exports= router;