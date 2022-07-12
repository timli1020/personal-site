import "./home.css";
import IntroBlock from "../../components/introblock/introblock";
import React from "react";
import About from "../../components/aboutblock/aboutblock";

export default function HomePage() {
  return (
    <>
      <div className="col">
        <div className="row">
          <IntroBlock />
        </div>
        <div className="row">
          <About />
        </div>
        <div className="row">
          Please feel free to reach out to me!
        </div>
      </div>
    </>
  );
}
