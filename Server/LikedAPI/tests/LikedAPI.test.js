const request = require('request');

url="https://likedapi.herokuapp.com"

describe('GET /api/getLiked',()=>{
    it('should return all liked',(done)=>{
        request.get(url+'/api/getLikedSong',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);

/*describe('POST /api/liked',()=>{
    it('should create liked',  (done)=>{
        request.post(url+'/api/liked',{
            form:{
                name:"Liked1",
                songs:["5e9f8f8f8f8f8f8f8f8f8f8","5e9f8f8f8f8f8f8f8f8f8f8"]
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

describe('DELETE /api/liked/:id',()=>{
    it('should delete liked',(done)=>{
        request.delete(url+'/api/removeLiked/574554',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);
*/
