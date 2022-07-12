import React from "react";
import './navbar.css'

export default function NavBar() {
  return (
    <nav className="navbar navbar-default sticky-top">
      <h1 className="navbar-text"></h1>
      <div>
        <button type="button" className="btn navbar-btn">Github</button>
        <button type="button" className="btn navbar-btn">LinkedIn</button>
        <button type="button" className="btn navbar-btn">Resume</button>
        <button type="button" className="btn navbar-btn">Contact</button>
      </div>
    </nav>
  )
}