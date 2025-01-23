import React, { useState } from "react";
import logo from './new.png';
import './App.css';

const App = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (!feedback) {
      alert("Please select a feedback option before submitting.");
    } else {
      alert("Feedback submitted: " + feedback);
    }
  };

  return (
    <div><img src={logo} alt="Logo" className="logo" />
    <h2 style={{textAlign: "center", fontFamily: "Arial, sans-serif", color:"grey"}}>SAKTHI AUTO</h2>
    <h2 style={{textAlign: "center", fontFamily: "Arial, sans-serif", color:"grey"}}>Canteen Feedback Thoughts...!</h2>
      <div
        className="App"
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px", 
          maxWidth: "400px",
          margin: "50px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>Tell us what you think! what's on the menu today?</h1>
        <div style={{ marginTop: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Employee Number: 
            <input 
              type="text"
              name="empno"
              value=""
              style={{ marginLeft: "10px",}}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <input
              type="radio"
              name="feedback"
              value="Good"
              onChange={handleFeedbackChange}
              style={{ marginRight: "10px" }}
            />
            Good
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <input
              type="radio"
              name="feedback"
              value="Moderate"
              onChange={handleFeedbackChange}
              style={{ marginRight: "10px" }}
            />
            Moderate
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <input
              type="radio"
              name="feedback"
              value="Satisfied"
              onChange={handleFeedbackChange}
              style={{ marginRight: "10px" }}
            />
            Satisfied
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <input
              type="radio"
              name="feedback"
              value="Not Satisfied"
              onChange={handleFeedbackChange}
              style={{ marginRight: "10px" }}
            />
            Not Satisfied
          </label>
        </div>
        <button
          onClick={handleSubmit}
          style={{
            display: "block",
            width: "100%",
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default App;
