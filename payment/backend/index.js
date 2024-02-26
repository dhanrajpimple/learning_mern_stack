const express = require('express')
const Razorpay = require('razorpay');

const razarpayInstance = new  Razorpay({
  key_id: rzp_test_fiIwmRET6CApc2,
  key_secret: YAEUthsup8SijNs3iveeVlL1
});

const app = exprss();
const PORT = 5000;


app.listen(PORT, () => {
  console.log('port is running');
})


app.post('/createOrder', (req, res)=>{
  const {amount, currency, receipt, notes}= req.body;

   razorpayInstance.orders.create({amount, currency, receipt, notes }, (err, order)=>{
    if(!err)
    res.json(order)
  else{
    res.send(err)
  }
   })
})

app.post('/verifyOrder', (req, res)=>{
  const {order_id, payment_id} = req.body;
  const razorpay_signature = req.headers['x-rzp-sig'];

  const key_secret = dhanraj;

  let hmac = crypto.createHmac('sha256', key_secret);
  hmac.update(order_id + "|" + payment_id);
  const generated_sing = hmac.digest('hex');

  if(razorpay_signature === generated_sing){
    res.json({success:true, message:'payment has been verified'})
  }
  else{
    res.json({success:false, message:'payment verification failed'})
  }
})