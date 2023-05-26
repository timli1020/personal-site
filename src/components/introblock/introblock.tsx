import React from "react";
import './introblock.css'

export default function IntroBlock () {
    return (
        <div className="intro-block">
            <h1 className="intro-block-text desc">Hello 👋! I'm </h1>
            <div className="row">
                <h1 className="intro-block-text name">Tim Li</h1>
                <img className="poggers-icon" src="./techstackicons/sunglasses.jpeg" alt="logo" width={100} height={100}/>
            </div>
            <h1 className="intro-block-text desc">A software engineer based in New York.</h1>
            <h1 className="intro-block-text desc">Nice to meet you!</h1>
        </div>
    )
}
