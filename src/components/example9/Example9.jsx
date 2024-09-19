import React from "react";
import './style.css'

const Example9 = (props)=>{
    const {firstname, lastname, email, phone, profile, address} = props
    console.log(props);
    return(
        <div>
            <h1 className="bg-success text-white p-3 p-md-5 rounded">Creating default props inside the same functional component</h1>
            <div className="lead">
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{firstname}  {lastname}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{profile}</p>
                <p>{address.city}</p>
                <p>{address.pincode}</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow user-card">
                           <div className="card-header text-center bg-transparent">
                           <img src={profile} className="profile-pic" alt={firstname} />
                           </div>
                           <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b>First Name:</b> {firstname}</li>
                                <li className="list-group-item"><b>Last Name:</b> {lastname}</li>
                                <li className="list-group-item"><b>Full Name:</b> {firstname} {lastname}</li>
                                <li className="list-group-item text-primary"><b>Email Address:</b> {email}</li>
                                <li className="list-group-item"><b>Phone number:</b> <a href={`tel:${phone}`}>{phone}</a></li>
                                <li className="list-group-item">
                                    <table border={1} width='100%' className="address-table" >
                                        <tr className="table-primary">
                                            <th>City</th>
                                            <th>Pincode</th>
                                        </tr>
                                        <tr>
                                            <td>{address.city}</td>
                                            <td>{address.pincode}</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Example9.defaultProps = { // creating default props form the same component only
    firstname:'Arun',
    lastname:'Kumar',
    email:'Kumar@gmail.com',
    phone:'+91863737878',
    profile:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933',
    address:{
        city:'Bangalore',
        pincode:560201
    }
}


export default Example9;