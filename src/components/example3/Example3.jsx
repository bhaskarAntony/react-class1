import React from "react";

const Example3 = (props)=>{
    console.log(props); //object
    //Destructing Props(props are the object)
    const {c, d, isOnline, firstNumber, secondNumber} = props;

    const array = ['hello1', 'Hello2', 'Hello3', 'hello4', 'hello5', 'Hello6', 'Hello7', 'hello8'];
    // console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
    // console.log(array[3]);

    // const [a, , b, c ] = array;
    const [a, b, ...rest] = array;
    console.log(a);
    console.log(b);
    console.log(rest);

    // console.log(a);
    // // console.log(element2);
    // console.log(b);
    // console.log(c);

    //example2
    function Maths(a, b){
        const add = a+b;
        const sub = a-b;
        const mul = a*b;
        const div = a/b;
        return [add, sub, mul, div]
    }
    console.log(Maths(2, 3)); //object array
    const [value1, value2, value3, value4] = Maths(2, 3)

    //example3
    function MinMax(){
        const min =Math.min(1, 2, 3, 4);
        const max=Math.max(1, 2, 3, 4);
       return [min, max]
    }
    console.log(MinMax()); //[1, 4]
    const [min , max] = MinMax();
    //min=1
    //max=4


    const user = {
        firstname:'Arun',
        lastname:'Kumar',
        email:'ARun@gmail.com',
        phoneNumber:'+919783987387',
        status:'Good'
    }
    // console.log(user.firstname);
    // console.log(user.lastname);
    // console.log(user.email);
    // console.log(user.phoneNumber);
    // console.log(user.status);


    const {firstname, lastname, email, phoneNumber, status} = user;


    return(
        <div>
      <h1>    {c}</h1>
      <h1>    {d}</h1>
      <h1>    {isOnline==true?'yes the props is true':'no the props is not true'}</h1>
      <h1>{Number(firstNumber) +Number( secondNumber)}</h1>

      <h1>Add: {value1}</h1>
      <h1>Sub: {value2}</h1>
      <h1>Mul; {value3}</h1>
      <h1>Div: {value4}</h1>
      <hr />

      <h1>Min: {min}</h1>
      <h1>Max: {max}</h1>


      <h1>Object</h1>
      <h1>Firstname: {firstname}</h1>
      <h1>lastname: {lastname}</h1>
      <h1>email: {email}</h1>
      <h1>phone number: {phoneNumber}</h1>
      <h1>status: {status}</h1>
        </div>
    )
}

export default Example3;