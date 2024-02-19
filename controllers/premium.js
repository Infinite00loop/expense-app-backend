const sequelize = require('../util/database');


const Expense = require('../models/expense');
const Userdetail=require('../models/userdetail');


exports.getleaderboard = async (req,res,next)=>{
    try{
        const leaderboard = await Userdetail.findAll({
            attributes:['username','totalexpense']
            
        })
        res.status(200).json(leaderboard)

    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
   
}