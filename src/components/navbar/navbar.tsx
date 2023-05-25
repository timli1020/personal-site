import React from "react";
import './navbar.css';

class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className="navbar navbar-default sticky-top">
        <h1 className="navbar-text"></h1>
        <div>
          <a href="https://github.com/timli1020" type="button" className="btn navbar-btn">Github</a>
          <a href="https://www.linkedin.com/in/tim-li1/" type="button" className="btn navbar-btn">LinkedIn</a>
          <a href="./resume.pdf" type="button" className="btn navbar-btn">Resume</a>
          <a href="mailto:zhaotian.li@uconn.edu" type="button" className="btn navbar-btn SendEmail">Contact</a> 
        </div>
      </nav>
    )
  }
}

export default NavBar
