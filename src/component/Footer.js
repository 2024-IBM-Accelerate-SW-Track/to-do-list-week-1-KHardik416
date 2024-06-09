import React from "react";
import { Card, CardContent } from "@mui/material";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <Card>
        <CardContent
          style={{ background: "#333", color: "white", width: "100vw" }}
        >
          <p>&copy; 2024 Todo App</p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
