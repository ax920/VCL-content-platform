import React from "react";
import { TEXT } from '@statics';
import "./LandingPage.css"
import Card from "@components/Card";

const LandingPage = () => {
    return (
      <div>
        <div id="top-section">
            <div id="info-section">
                <div id="title">
                    {TEXT.LANDING_PAGE.TITLE}
                </div>
                <div id="lab-description">
                    {TEXT.LANDING_PAGE.DESCRIPTION}
                </div>
                <div className="btn_ubc_home">
                <a href="https://www.ubc.ca" style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                    <p>{TEXT.LANDING_PAGE.UBC_PAGE_BUTTON}</p>
                    </a>
                </div>
            </div>
            {/*placeholder for image*/}
        </div>
        <div id="card-section">
            <div className="card-container">
                <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
                <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
                <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
                <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
            </div>
        </div>
    </div>
    );
  };
  
  export default LandingPage;