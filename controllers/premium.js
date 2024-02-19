const Expense = require('../models/expense');
const Userdetail=require('../models/userdetail');


exports.getleaderboard = (req,res,next)=>{
   Expense.findAll()
    .then((expenses)=>{
       const expenseMap=new Map()
       const leaderboard=[]
       expenses.forEach(expense => {
        const userId=expense.userdetailId
        const amount=expense.amount
        if(expenseMap.has (userId)){
            expenseMap.set(userId, expenseMap.get(userId)+amount)
        }
        else{
           expenseMap.set(userId,amount) 
        }
       
       });
       Userdetail.findAll()
       .then(users=>{
        users.forEach(user =>{
            leaderboard.push({"name": user.username, "amount":expenseMap.get(user.id)})
        })
        console.log(leaderboard)
        return res.json(leaderboard)
       })
       .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err));
}