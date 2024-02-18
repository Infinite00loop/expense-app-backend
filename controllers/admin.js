const Userdetail=require('../models/userdetail');

const bcrypt=require('bcrypt');

exports.insertUser = (req, res, next) => {
   var myObj=req.body;
   const saltrounds=10;
   bcrypt.hash(myObj.password,saltrounds,(err,hash)=>{
    if(!err){
      myObj.password=hash;
      Userdetail.create(myObj)
    .then(result=>{
      console.log('user created');
      res.redirect('/get-user')
    })
    .catch(err => {console.log(err) })
    }
    console.log(err)
   }) 
  };

exports.getUser=(req,res,next)=>{
    const email=req.params.email;
    console.log(email);
    Userdetail.findAll({
        where:{
            email : email
        }
    })
    .then(userdetail=>{
        console.log('Got user details');
        console.log(userdetail[0])
        res.json(userdetail[0])       
    })
    .catch(err=>console.log(err))
}
exports.loginUser = (req, res, next) => {
  var myObj=req.body; 
  Userdetail.findAll({
    where:{
        email : myObj.email
    }
})
.then(userdetail=>{
   if(userdetail[0]==undefined){
    res.status(404).json('User does not exist')
}
else{
    var pass= userdetail[0].password
    bcrypt.compare(myObj.password,pass,(err,result)=>{
      if(err){
        res.status(500).json('Something went wrong')
      }
      if(result===true){
        res.status(200).json('Logged in successfully')
      }
      else{
        res.status(401).json('Password  incorrect') 
      }
    })  
}        
})
.catch(err=>console.log(err))
 };