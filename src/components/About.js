import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <h2>Namaste React from ReactJS tutorial</h2>
        <User name={"Praveen Ghali function()"} location={"Yeshavantapura"}/> 
        <UserClass  name={"Praveen Ghali class()"} location={"Yeshavantapura"}/>

    </div>
    
  )
}

export default About;