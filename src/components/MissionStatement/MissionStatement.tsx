import React from 'react';
import { TEXT } from '@statics';
import './MissionStatement.css'

const MissionStatement = () => {
    return (

      <div className="mission-statement-footer">
        <div className="footer-divider"></div>
        <p>{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
      </div>

    )
}

export default MissionStatement;