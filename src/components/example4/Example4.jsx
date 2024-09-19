import React from 'react'
import './style.css'

function Example4({contacts}) {
    // const {contacts} = props
    // console.log(contacts);


    console.log(contacts);
    const colors = ['green', 'red', 'blue', 'yellow', 'Orange']
   
  return (
    <div>
       <div className="all-contacts">
       {
            contacts.map((contact, contactIndex)=>(
                <div className="contact" key={contactIndex}>
                {/* <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt={contact.name} className='profile' /> */}
                <div className={` profile  ${colors[Math.floor(Math.random()*colors.length)]}}`}>
                    <h1>{contact.name.charAt(0)}</h1>
                </div>
                <div className="info">
                    <h4>{contact.name}</h4>
                    <p>{contact.number}</p>
                </div>
                </div>
            ))
        }
       </div>
    </div>

  )
}

export default Example4