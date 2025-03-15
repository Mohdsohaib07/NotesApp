import jwt from 'jsonwebtoken';
import 'dotenv/config'
//authentication middleware
function handleAuth(req,res,next){
    const authHeader = req.headers.authorization;
    console.log('auth header',authHeader);
    
const token = authHeader ;
console.log(token);
if(!token){
    return res.sendStatus(401);
}
  jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
    if(err) return res.sendStatus(403);
    console.log(user);
    req.user=user;
  });
    
    next();
}

export default handleAuth;