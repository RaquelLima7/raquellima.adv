const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware 
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/contato.html')
})

app.post('/', (req,res)=>{
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { 
      user: 'testnodemailer.adv@gmail.com',
      password: 'Password$01'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'testnodemailer.adv@gmail.com',
    subject: `Mensagem de ${req.body.name}: ${req.body.subject}.`, 
    text: `${req.body.message} Entre em contato comigo pelo telefone: ${req.body.phone}.`, 
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.error(error);
      res.send('error');
    }else{
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  })
})

app.listen(PORT, ()=>{
  console.log('listening on port ${PORT}');
})
