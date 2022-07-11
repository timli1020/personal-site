import React from "react";
import './navbar.css'

export default function NavBar() {
  return (
    <nav className="navbar navbar-default sticky-top">
      <h1 className="navbar-text">Tim.</h1>
      <div>
        <h1 className="navbar-text">Items1</h1>
        <h1 className="navbar-text">Items2</h1>
        <h1 className="navbar-text">Items3</h1>
      </div>
    </nav>
  )
}