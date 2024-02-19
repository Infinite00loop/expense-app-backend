const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');
const adminRoutes = require('./routes/admin');
const expenseRoutes = require('./routes/expense');
const Userdetail=require('./models/userdetail');
const Expense=require('./models/expense');
const Order=require('./models/order');
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(adminRoutes);
app.use(expenseRoutes);

Userdetail.hasMany(Expense);
Expense.belongsTo(Userdetail);

Userdetail.hasMany(Order);
Order.belongsTo(Userdetail);

// sequelize.sync({force:true})
sequelize.sync()
.then(result=>{
    //console.log(result);
    app.listen(5000);
})
.catch(err=>console.log(err));