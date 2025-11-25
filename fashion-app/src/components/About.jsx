import React from "react";
import BackToHome from "./BackToHome";

export default function About() {
  // Example data for team members or features
  const team = [
    { id: 1, name: "Swarna Burra", role: "Founder & Designer" },
    { id: 2, name: "Loralai Gilmore", role: "Frontend Developer" },
    { id: 3, name: "Jess Mariano", role: "Backend Developer" },
  ];

  const features = [
    "Seasonal outfit recommendations",
    "Fashion quiz to discover your style",
    "Save your favorite looks",
  ];

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>About FashionMate</h2>

     
      <h3>Meet Our Team</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "2rem",
        }}
      >
        <thead>
          <tr style={{ background: "#8e131bff", color: "white" }}>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>#</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member) => (
            <tr key={member.id}>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{member.id}</td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{member.name}</td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* List of Features */}
      <h3>App Features</h3>
      <ul>
        {features.map((feature, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            {feature}
          </li>
        ))}
      </ul>

      <BackToHome />
    </div>
  );
}
