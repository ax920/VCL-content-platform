import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <SettingsOutlinedIcon fontSize="large" color="primary" id="icon" />
      <h3 id="card-title">Card Title</h3>
      <p id="card-desc">
        Description of how the lab can help COGS students with this project
      </p>
    </div>
  );
};

export default Card;
