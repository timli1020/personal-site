import React from "react";
import './introblock.css'

export default function IntroBlock () {
    return (
        <div className="intro-block">
            <h1 className="intro-block-text desc">Hello! 👋 I'm </h1>
            <h1 className="intro-block-text name">Tim Li</h1>
            <h1 className="intro-block-text desc">A software engineer based in Boston.</h1>
        </div>
    )
}