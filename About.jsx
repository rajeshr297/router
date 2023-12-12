import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const About = () => {

    const[state,setState]=useState("About")
  return (

    <div>
        <Link to="/about" >About</Link>
      <h1>{state}</h1>

    </div>
  )
}

export default About
