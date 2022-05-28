import React from "react";
import Card from "@components/Card";
import "./Home.css"

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <div>HI THIS IS THE LANDING PAGE</div>
      <div className="card-container">
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
      </div>
    </div>
  );
};

export default Home;
