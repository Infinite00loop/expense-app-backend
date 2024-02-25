
function onsignup(){
    var username_=document.getElementById('id1').value;
    var email_=document.getElementById('id2').value;
    var password_=document.getElementById('id3').value;
   
    let myObj={
        username: username_,
        email: email_,
        password: password_
    };
        if(username_!='' && email_!='' && password_!='' ){
            axios.get(`${api_endpoint}get-user/${email_}`)
            .then((result)=> {
                if(result.data==""){
                    axios.post(`${api_endpoint}insert-user`,myObj)
                    .then((res)=> {
                        console.log(res)
                        window.location.href="../login/login.html"

                    })
                    .catch((err)=> console.log(err));
                }
                else{
                    alert('User already exists')
                }
            })
            .catch((err)=> console.log(err))
           
        }
       
}
