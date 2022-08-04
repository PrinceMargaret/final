
const url="https://muzixplaylist.herokuapp.com"

const request=require('request');
describe('GET /api/getPlaylist',()=>{
    it('should return all playlist',(done)=>{
        request.get(url+'/api/getPlaylist',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
    }
    );
}
);
describe('GET /api/getPlaylist/:id', ()=>{
    it('should return playlist by id',(done)=>{
        request.get(url+'/api/getPlaylist/f21117be-16fa-4f82-afcf-3512f2b3f078',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);

/*describe('PUT /api/playlist/:id',()=>{
    it('should update playlist',(done)=>{
        request.put(url+'/api/playlist/5e9f8f8f8f8f8f8f8f8f8f8',{
            form:{
                name:"Playlist1",
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
);*/

/*
describe('DELETE /api/playlist/:id',()=>{
    it('should delete playlist',(done)=>{
        request.delete(url+'/api/playlist/5e9f8f8f8f8f8f8f8f8f8f8',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);

*/







