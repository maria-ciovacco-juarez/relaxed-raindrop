import "./AboutContentStyles.css"
import {Link} from "react-router-dom";
import React from 'react'
// import React1 from "../assets/react1.jpg"
// import React2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>Currently, I am a full-stack developer student at the University of Minnesota, and I have plans to obtain my certification. I have knowledge in Markup language, JavaScript, React, and SQL. I'm excited to connect with you!</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right"></div>
      <div className="img-container">
        <div className="img-stack top">
          {/* <img src={React1} className="img" alt="true"/> */}
        </div>
        <div className="img-stack top">
          {/* <img src={React2} className="img" alt="true"/> */}
        </div>
      </div>
    </div>
  )
}

export default AboutContent