const sequelize = require('../util/database');
const Sib = require('sib-api-v3-sdk')

const Expense = require('../models/expense');
const Userdetail=require('../models/userdetail');


exports.forgotpassword = async (req,res,next)=>{
    try{
        const client = Sib.ApiClient.instance
        const apikey = client.authentication['api-key']
        apikey.apiKey = process.env.API_KEY
        const tranEmailApi = new Sib.TransactionalEmailsApi()

        const sender ={
            email: 'samriddhisingh07092002@gmail.com',
        }
        const recievers = [
            {
                email: 'samriddhisingh07092002@gmail.com',
            }
        ]
        const result=await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject:` Automated email`,
            textContent: `This is a {{params.test}} email`,
            params: {
                test: 'test',
            }
        })
        console.log("I am in forgot password")
        console.log(res)

    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
   
}