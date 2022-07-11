import "./home.css";
import IntroBlock from "../../components/introblock/introblock";
import BeeMovieText from "../../components/beemovie/beemovie";
import React from "react";
import NavBar from "../../components/navbar/navbar";

export default function HomePage() {
  return (
    <>
      <IntroBlock />
      <BeeMovieText />
    </>
  );
}
