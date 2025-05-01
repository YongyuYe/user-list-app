import { useState } from 'react';
import UserCard from './UserCard';

const allUsers = [
  {
    name: "Alice",
    role: "Engineer",
    avatar: "https://i.pravatar.cc/50?u=alice",
    email: "alice@example.com",
    bio: "Loves solving complex problems and hiking on weekends."
  },
  {
    name: "Bob",
    role: "Designer",
    avatar: "https://i.pravatar.cc/50?u=bob",
    email: "bob@example.com",
    bio: "Passionate about minimalist design and coffee."
  },
  {
    name: "Charlie",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/50?u=charlie",
    email: "charlie@example.com",
    bio: "Coordinates teams and keeps everything on track."
  }
];

export default function UserList() {
  const [searchText, setSearchText] = useState("");

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "12px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />

      {filteredUsers.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}

      {filteredUsers.length === 0 && (
        <p style={{ color: "gray" }}>No users found.</p>
      )}
    </div>
  );
}
