import React from 'react'
import "../App.css";
import {Link} from 'react-router-dom'

const Home = () => {
   const styles = {
        fontstyle: "bold",
        color : "teal"
    };
  return (
 <>
<Link to="/home" style={styles}>Home</Link>
<div className="content">
    <p>Welcome to my page to experience the next level ride</p>
</div>
 </>
  )
}

export default Home;
