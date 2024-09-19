import React, { Component } from "react";

//global variables
let x =21;
let y = 124;
let title = 'Welcome class component example';
let isOnline = false;

let user = {
    name:'Admin',
    age:56,
    email:'Admin@gmail.com'
}

const employeenames = ['Manu', 'Manoj', 'Arun', 'Aravind', 'Kiran', 'Anvar']

const calucateSum = (firstnumber, secondNumber) =>{
    return <h1>{firstnumber + secondNumber}</h1>
}
class Example5 extends Component{ //creating component
    constructor(props){
        super(props)
    }
    render(){
        //local variable
        return(
            <div className="conatiner">
                <h1>This is the example5 class component</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores amet similique quae expedita tempora inventore voluptatem quaerat praesentium illo cumque, id delectus, nemo enim non illum architecto, vel fuga.</p>

                <h1>X value = {x}</h1>
                <h1>Y value = {y}</h1>

                <h1>Title = {title}</h1>
                <h1>is online = {isOnline?'Yes user is in online':'no user in Offline'}</h1>
                <h1>name of user = {user.name}</h1>
                <h1>age of user = {user.age>50?(<h1>user age is {user.age} is greter than to 50 </h1>):(<h1>user age is {user.age} is less than to 50</h1>)}</h1>

                <h1>email is {user.email?(<h1>user email is {user.email}</h1>):(<h1>user dont have any email...</h1>)}</h1>

                <hr />
                <p><b><h1>employeenames array is {employeenames}</h1></b></p>
                <h1>Array employeenames[0] {employeenames[0]}</h1>
                <h1>Array employeenames[1] {employeenames[1]}</h1>
                <h1>Array employeenames[2] {employeenames[2]}</h1>
                <h1>Array employeenames[3] {employeenames[3]}</h1>
                <h1>Array employeenames[4] {employeenames[4]}</h1>
                <h1>Array employeenames[5] {employeenames[5]}</h1>

                <div>
                    <ul className="list-group">
                        {
                            employeenames.map((name, nameIndex)=>(
                                <li className="list-group-item">employee name = {name}</li>
                            ))
                        }
                    </ul>
                </div>

                <table className="table" border={1}>
                    <tr>
                        {
                            employeenames.map((name, nameIndex)=>(
                                <td>{name}</td>
                            ))
                        }
                    </tr>
                </table>

                <div>
                    <h1>Function</h1>
                    {calucateSum(x, y)}
                </div>
            </div>
        )
    }
}
export default Example5; //exporting the created components to other components to use