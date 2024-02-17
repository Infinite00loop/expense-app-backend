const Userdetail=require('../models/userdetail');

exports.insertUser = (req, res, next) => {
   var myObj=req.body;
   console.log(myObj)
   console.log('hi')
    
    Userdetail.create(myObj)
    .then(result=>{
      console.log('user created');
    //   res.redirect('/get-user')
    })
    .catch(err => {
      console.log(err)
    })
  };

// exports.get=(req,res,next)=>{
//     const name=req.params.name;
//     console.log(name);
//     Cricket.findAll({
//         where:{
//             name : name
//         }
//     })
//     .then(cricket=>{
//         console.log('Got player details');
//         console.log(cricket[0])
//         res.json(cricket[0])       
//     })
//     .catch(err=>console.log(err))
// }

// exports.updateCricket=(req,res,next)=>{
//   const id=req.params.id;
//   console.log(id);
//   Cricket.findByPk(id)
//   .then(cricket=>{
//     console.log(id);
//     cricket.name = req.body.name;
//     cricket.dob = req.body.dob;
//     cricket.imgUrl = req.body.imgUrl;
//     cricket.birthPlace = req.body.birthPlace;
//     cricket.career = req.body.career;
//     cricket.matches = req.body.matches;
//     cricket.score = req.body.score;
//     cricket.fifties = req.body.fifties;
//     cricket.centuries = req.body.centuries;
//     cricket.wickets = req.body.wickets;
//     cricket.average = req.body.average;

//     cricket.save()
//     .then(result=>{
//       console.log("updated...");
//     })
//     .catch(err=>console.log(err));
//   })
//   .catch(err=>console.log(err))
// }