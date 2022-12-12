const router = require('express').Router();


router.get('/index',(req,res)=>{
    res.send('index page');
});
router.get('/contact',(req,res)=>{
    res.send('contact page');
});
router.get('/about',(req,res)=>{
    res.send('about page');
});


module.exports = router;