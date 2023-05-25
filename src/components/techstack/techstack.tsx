import React from "react";
import './techstack.css'

export default function TechStack () {
    return (
        <div className="techstack-block">
            <img className="techstack-icon" src="./techstackicons/angular.jpeg" alt="logo" width={100}/>
            <img className="techstack-icon" src="./techstackicons/typescript.jpeg" alt="logo" width={100}/>
            <img className="techstack-icon" src="./techstackicons/jenkins.jpeg" alt="logo" width={100} height={100}/>
            <img className="techstack-icon" src="./techstackicons/react.jpeg" alt="logo" width={110} height={100}/>
            <img className="techstack-icon" src="./techstackicons/python.jpeg" alt="logo" width={100} height={100}/>
            <img className="techstack-icon" src="./techstackicons/springboot.jpeg" alt="logo" width={100} height={100}/>
        </div>
    )
}