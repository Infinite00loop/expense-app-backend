const Userdetail=require('../models/userdetail');

exports.insertUser = (req, res, next) => {
   var myObj=req.body;
   console.log(myObj)
   console.log('hi')
    
    Userdetail.create(myObj)
    .then(result=>{
      console.log('user created');
      res.redirect('/get-user')
    })
    .catch(err => {
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
  console.log(myObj)
  console.log('hi')
   
  Userdetail.findAll({
    where:{
        email : myObj.email
    }
})
.then(userdetail=>{
   var response=""
   var result=userdetail[0]
   if(result==undefined){
    res.status(404);
    response='User does not exist'
}
else{
    var pass= result.password
    if(myObj.password=== pass){
      res.status(200);
        response='Logged in successfully'
    }
    else{
      res.status(401);
      response='Password  incorrect'

    }
}
    console.log(userdetail[0])
    res.json(response)       
})
.catch(err=>console.log(err))
 };