import React from "react";
import Card from "@components/Card";
import LandingPage from "@components/LandingPage";
import "./Home.css"

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="Home">
      <LandingPage></LandingPage>
    </div>
  );
};

export default Home;
