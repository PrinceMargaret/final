const UserModel = require("../Model/UserModel");
const bcryptjs = require("bcryptjs");
const mail = require("../Sendmail/sendMail");
const jwt = require("jsonwebtoken")
const OtpModel = require("../Model/otpModel")

function GenerateToken(user_id){
    return jwt.sign({user_id}, process.env.SECRET, {expiresIn: "1h"});
}

const ResetPassword = (email, password)=>{
    return new Promise(async (resolve, reject) => {
        let user = await UserModel.findOne({email: email});
        if(user){
            let newPassword = bcryptjs.hashSync(password, 10);
            await UserModel.updateOne({email: user.email}, {password: newPassword});
            resolve({message: "Password Updated Successfully", success:true });
        }else{
            reject({message: "User does not exist", success:false});
        }
    })
}

const SendMail = (email, hostname)=>{
    return new Promise(async (resolve, reject)=>{
        let user = await UserModel.findOne({email: email});
        if(!user){
            reject({message: "User not found", success: false});
        }

        if(user){
            let otpCode = Math.floor(Math.random()*10000 + 1);
            let otpData = new OtpModel({
                email: email,
                code: otpCode,
                expiresIn: new Date().getTime() + 300*1000
            })
            // let token = GenerateToken({id: user._id, email: user.email});
            // let link = `http://localhost:3000/resetpassword/${user.email}/${token}`;

            let OtpResponse = await otpData.save();
            
            let bool = await mail(otpCode, user.email);

            if (bool) {
                resolve({ message: "Otp has been sent to your email id", success: true })
            } else {
                reject({ message: "Otp coud not be sent to your email id", success: false })
            }
        }
    })
}

function GetUser(){
    return new Promise((resolve, reject) => {
        UserModel.find({}, (err, data) => {
            if (!err) {
                console.log(data)
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = {ResetPassword, SendMail, GetUser}

















// function LoginUser(req, res){
//     UserModel.findOne({email: req.body.email}, (err, user) => {
//         if(!user){
//             res.status(401).send({status: 401, message: "User with given email does not exist. Please Register."});
//         }
//         else if(user){
//             if(bcryptjs.compareSync(req.body.password, user.password)){
//                 res.status(200).send({
//                     status: 200, 
//                     token: GenerateToken(req.session.passport), 
//                     message: "User Login successfully"});
//             }
//             else{
//                 res.status(402).send({status: 402, message: "Password Incorrect"});
//             }
//         }
//         else{
//             res.status(403).send(err);
//         }
//     });
// }