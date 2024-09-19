import React from 'react'
import './style.css'

function Example1() {
    //local variables
    let a =10; //Number
    let str1 = 'This is the string variable'

    let isLoading = false;
    //checking ifthe variable if it is true then returning a spinner
    if(isLoading){
        return(
            <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        )
    }

    //object
    var user = {
        username:'name',
        email:'test@gmail.com'
    }

    //array
    const names = ['Arjun', 'Aravindh', 'Anvar', 'Balu', 'Kiran', 'Kurup', 'Neeraja', 'Mohan']
    console.log(names[0]);//Arjun
  return (
    <div>
     
        {/* {isLoading==true?'Yes Its Loading':'No Its not Loading'} */}
        {/* {
            isLoading?( //if part
                <div>
                    <h1>Loading...</h1>
                </div>
            ):( //else part
                <div>
                   
                </div>
            )
        } */}
                    <h1>{a}</h1>
                    <h1>the variable str = {str1}</h1>

                    {/* priniting user object  */}
                    <h1>Username: {user.username}</h1>
                    <h1>Email: {user.email}</h1>
                 
                 {/* printing array elements */}
                 <h1>names first = {names[0]}</h1>
                 <h1>names second = {names[1]}</h1>
                 <h1>names third = {names[2]}</h1>
                 <h1>names fourth = {names[3]}</h1>

                 {/* applying array method to array */}
                 <ul>
                 {
                    names.map((item, index)=>(
                       <li><h4>{index+1}) {item}</h4><hr /></li>
                    ))
                 }
                 </ul>
    </div>
  )
}

export default Example1