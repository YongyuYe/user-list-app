import { useState } from 'react';

export default function UserCard({ name, role, avatar, email, bio, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "8px"
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ width: "50px", borderRadius: "50%", cursor: "pointer" }}
      
      />
      <h3>{name}</h3>
      <p>{role}</p>

    
      <p
        style={{
          fontSize: "12px",
          color: "blue",
          cursor: "pointer",
          marginTop: "4px"
        }}
        onClick={toggleDetails}
      >
        {showDetails ? "Hide Details ▲" : "Show Details ▼"
        }

      </p>

      {showDetails && (
        <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
        </div>
      )}

      <button onClick={()=>onDelete(email)}> Delete this user</button>
    </div>
  );
}
