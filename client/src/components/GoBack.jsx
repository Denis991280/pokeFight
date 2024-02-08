import { useNavigate } from "react-router-dom";

// Created Go back button for navigation to the previous page //
const GoBack = () => {
  const navigate = useNavigate();
  return (
   
      <button className="goback-btn" onClick={() => navigate(-1)}>Go Back</button>
  
  );
};

export default GoBack;
