import React from "react";
import './navbar.css'

export default function NavBar() {
  return (
    <nav className="navbar navbar-default sticky-top">
      <h1 className="navbar-text"></h1>
      <div>
        <a href="https://github.com/timli1020" type="button" className="btn navbar-btn">Github</a>
        <a href="https://www.linkedin.com/in/tim-li1/" type="button" className="btn navbar-btn">LinkedIn</a>
        <a href="./Resume 2.0.pdf" type="button" className="btn navbar-btn">Resume</a>
        <button type="button" className="btn navbar-btn">Contact</button>
      </div>
    </nav>
  )
}