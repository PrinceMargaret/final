const request=require('request');
url='http://localhost:8000';
///register
describe('POST /api/register',()=>{
    it('should create user',  (done)=>{
        request.post(url+'/api/register',{
            form:{
                name:"User1",
                email:"xyz@gmail.com",
                password:"123456"
            }
        },(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
         
             
        }
        );
    }
    );


//login
describe('POST /api/login',()=>{
    it('should login user',  (done)=>{
        request.post(url+'/api/login',{
            form:{
                email:"xyz@gmail.com",  
                password:"123456"
            }
        },(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
         
             
        }
        );
    }
    );



