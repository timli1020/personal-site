import React from "react"
import TechStack from "../techstack/techstack"
import './aboutblock.css'

export default function About () {
    return (
        <div className="about-block">
            <h1 className="about-title">About me 👨‍💻:</h1>
            <h1 className="about-me-text">🎓 I recently completed my BSc. in Computer Science at the University of Connecticut.</h1>
            <h1 className="about-me-text">💼 I am currently working as a software engineer and have around 2 years of industry experience.</h1>
            <h1 className="about-me-text">🖥️ Here are some of the technologies that I frequently use:</h1>
            <TechStack/>
        </div>  
    )
}