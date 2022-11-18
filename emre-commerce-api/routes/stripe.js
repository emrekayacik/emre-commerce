const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// npm i react-stripe-checkout
// <StripeCheckout react component
// {onToken}
// more info => https://www.npmjs.com/package/stripe
// more info react implementation => https://www.npmjs.com/package/react-stripe-checkout

router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currenct: "usd"
        },
        (stripeErr,stripeRes) => {
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes);
            }
        }
    );
})


module.exports = router;