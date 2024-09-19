import React, { Component } from 'react'

 class Example7 extends Component {
//   constructor(props){
//     super(props)
//   }


  render() {
    const {firstname, secondname, email, phone} = this.props; //destructuring props without constructor method and super keyword
    console.log(this.props); //object
    return (
     <div className="conatiner">
        <div className="col-md-6 offset-md-3">
       <div className="card p-3 shadow-sm">
       <h3 className="text-center text-muted"> destructuring props</h3>
       <div className='list-group'>
        <h1 className='list-group-item'>Firstname: {firstname}</h1>
        <h1 className='list-group-item'>secondname: {secondname}</h1>
        <h1 className='list-group-item'>Email Address: {email}</h1>
        <h1 className='list-group-item'>Phone Number: {phone}</h1>
      </div>
       </div>
        </div>
     </div>
    )
  }
}

export default Example7