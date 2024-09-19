import React from "react";
import './style.css'

//global variables
let a = 10;

const Example2 = () =>{

    //local variables

    const firstname = 'Arun';
    const secondname = 'Kumar';

    const products =[
        {
            productname:'TestProduct1',
            productPrice:100,
            rating:4
        },
        {
            productname:'TestProduct2',
            productPrice:200,
            rating:2
        },
        {
            productname:'TestProduct3',
            productPrice:300,
            rating:5
        }
    ]


    const users = [
        {
            fisrtname:'Arun',
            lastname:'Kumar',
            email:'kumar@gamil.com',
            hobbies:['coding', 'racing', 'cycling', 'reading', 'learning', 'Exploring'],
            address:{
                city:'Bangalore',
                pincode:8676
            },
            marks:{
                kannada:90,
                english:80,
                hindi:95,
                science:78
            }
        },
        {
            fisrtname:'Mohan',
            lastname:'Kumar',
            email:'Mohan@gamil.com',
            hobbies:['coding', 'racing', 'cycling', 'reading', 'learning', 'Exploring'],
            address:{
                city:'Devanahalli',
                pincode:60120
            },
            marks:{
                kannada:34,
                english:12,
                hindi:89,
                science:12
            }
        }
    ]

   
    function print(student){
     return(
            student.map((item, index)=>(
                <div className="user">
                    <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="" />
                    <h4>Name: {item.fisrtname} {item.lastname} </h4>
                    <p><b>Eamil:</b> {item.email}</p>
                    <div className="hobbies">
                    {
                        item.hobbies.map((subItem, subIndex)=>(
                            <button>{subItem}</button>
                        ))
                    }
                    </div>
                   <table border={1}>
                   <tr>
                   {
                        Object.keys(item.marks).map((keyItem, keyIndex)=>(
                            <th>{keyItem}</th>
                        ))
                    }
                   </tr>
                   <tr>
                    {
                        Object.values(item.marks).map((key, keyIndex)=>(
                            <td>{key}</td>
                        ))
                    }
                   </tr>
                   <tr>
                    {
                        Object.values(item.marks).map((usermarks, marksIndex)=>(
                            <td className={usermarks<35?'fail':'pass'}>{usermarks<35?'fail':'Pass'}</td>
                        ))
                    }
                   </tr>
                   </table>
                   <button onClick={()=>DeleteHandler(index)}>delete</button>
                </div>
            ))
     )
    }

    function DeleteHandler(index){
        
        print(users.splice(index, 1))
      
    }
    return(
        <div>
            {/* <div className="all-cards">
            {
                products.map((item, index)=>(
                    <div className="product-card">
                        <h1>{item.productname}</h1>
                        <h3>{item.productPrice}</h3>
                        <small>{item.rating} ratings</small>
                    </div>
                ))
            }
            </div> */}

         <div className="all-users">
       {print(users)}
         </div>
        </div>
    )
}



export default Example2