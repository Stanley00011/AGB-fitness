const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/login', controller.user_login);

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.post('/signup', controller.after_signup);

router.post('/login', controller.user_post_login);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

router.use(function(err, req, res, next){
    res.status(500);
    res.render('500');
})

module.exports  = router;