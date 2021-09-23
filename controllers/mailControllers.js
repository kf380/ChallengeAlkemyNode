const sgMail = require('../services/sendgrid')


exports.sendEmail = async (req,res) =>{
    const {to, subject, text, html} = req.body
    console.log(req.body,'holaaa')
    const msg={
        to,
        from: process.env.EMAIL,
        subject,
        text,
        html
    };
    console.log(msg,'mensajeeee')
    try{
        await sgMail.send(msg);
    }catch(err){
        return res.status(err.code).send(err.message);
    }


    res.status(201).send({success:true})
}
