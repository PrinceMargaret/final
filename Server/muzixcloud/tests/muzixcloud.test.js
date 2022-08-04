
const   request=require('request');
url='https://muzixcloud.herokuapp.com';

/*
describe('GET /api/getTrack',()=>{
    it('should return all tracks',(done)=>{
        request.get(url+'/api/getTrack',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);
*/

///GetTopArtist
describe('GET /api/GetTopArtist',()=>{
    it('should return all artists',(done)=>{
        request.get(url+'/api/GetTopArtist',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);


///getNewRelease
describe('GET /api/getNewRelease',()=>{
    it('should return all albums',(done)=>{
        request.get(url+'/api/getNewRelease',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);

///searchTrack
describe('GET /api/searchTrack',()=>{
    it('should return all tracks',(done)=>{
        request.get(url+'/api/searchTrack',(err,res,body)=>{
            expect(res.statusCode).toBe(200);
            done();
        }
        )
       
        
    }
    );
}
);