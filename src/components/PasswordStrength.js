import React from "react";
import "./../styles/PasswordStrength.css";

const PasswordStrength = ({ password }) => {
  const getStrength = () => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Moderate";
    return "Strong";
  };

  return (
    <div className="password-strength">
      <p>Password Strength: {password && getStrength()}</p>
    </div>
  );
};

export default PasswordStrength;
