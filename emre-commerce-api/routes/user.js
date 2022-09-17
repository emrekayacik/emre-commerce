const router = require('express').Router();


router.get('/userTest',(req,res)=>{
    res.send('user test is successful')
});

router.post('/userPost',(req,res)=>{
    const username = req.body.username;
    res.send("Welcome " + username); 
})

module.exports = router;