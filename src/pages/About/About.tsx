import React from "react";
import Card from "@components/Card";

interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div>
      <div>This is the about page</div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default About;
