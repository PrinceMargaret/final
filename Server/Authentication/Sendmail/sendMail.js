const nodemailer = require('nodemailer');

async function mail(OtpCode, receiver) {
    //let account = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noreplymuzix@gmail.com',
            pass: 'amoputxyrvrikexh',
        },
        logger: true
    });
    
    var mailOptions = {
        from: 'noreplymuzix@gmail.com',
        to: receiver,
        subject: 'Request for reset password',
        text: `We have received a password change request from your account<br><br>This is your OTP.<br><br><h1>${OtpCode}</h1><br><br><p>Otp valid for only 5 minutes`,
        html: `<b>We have received a password change request from your account<br><br>This is your OTP.<br><br><h1>${OtpCode}</h1><br><br><p>Otp valid for only 5 minutes</p></b>`,
        
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

    mail().catch((err)=>{
        return false;
    })
    
    module.exports = mail;


/* const nodemailer = require('nodemailer');

async function mail(OtpCode, receiver) {
    //let account = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'noreplymuzix@gmail.com',
            pass: 'MuzixApp@123',
        },
        logger: true
    });
    
    const info = await transporter.sendMail({
        from: '"Muzix" <noreplymuzix@gmail.com>',
        to: receiver,
        subject: "Hello from node",
        text: "Hello world?",
        html: `<b>We have received a password change request from your account<br><br>This is your OTP.<br><br><h1>${OtpCode}</h1><br><br><p>Otp valid for only 5 minutes</p></b>`,
        headers: { 'x-myheader': 'test header' }
    });
    console.log("Message sent: %s", info.response);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return true;
}

mail().catch((err)=>{
    return false;
})

module.exports = mail; */

    