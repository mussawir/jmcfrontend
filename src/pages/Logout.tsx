import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session or token
    localStorage.removeItem("authToken"); // Adjust key based on your implementation
    sessionStorage.removeItem("userSession");
    
    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1>Logging out...</h1>
    </div>
  );
};

// Inline styles (for simplicity)
const styles: { container: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
};

export default Logout;
