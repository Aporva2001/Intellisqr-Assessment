const jwt= require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
    const authHeader= req.get("Authorization");
    if(!authHeader){
        res.redirect('/login');
        throw new Error("Not Authorized");
    }
    const token= authHeader.split(" ")[1];

    if(!token){
        throw new Error('Not authorized');
    }
    try{
        const decodedToken=jwt.verify(token,'somesupersecretsecret');
        req.user=decodedToken;
        next();
    }
    catch(err){
        throw err;
    }
}