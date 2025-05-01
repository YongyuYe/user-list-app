import { useState } from 'react';
import UserCard from './UserCard';

export default function UserList() {
  const [users, setUsers] = useState([
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
    }
  ]);

  const [searchText, setSearchText] = useState("");
  const [newUser, setNewUser] = useState({ name: "", role: "", email: "" });

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddUser = () => {
    if (!newUser.name || !newUser.role || !newUser.email) {
      alert("Please fill in all fields");
      return;
    }

    const addedUser = {
      ...newUser,
      avatar: `https://i.pravatar.cc/50?u=${newUser.email}`,
      bio: "This is a new user."
    };

    setUsers([...users, addedUser]);
    setNewUser({ name: "", role: "", email: "" }); // 清空表单
  };

  const handleDelete = (emailToDelete) => {
    const updatedUsers = users.filter(user => user.email !== emailToDelete);
    setUsers(updatedUsers);
  };
  

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

      {/* 添加新用户表单 */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Add New User</h3>
        <input
          placeholder="Name"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
          style={{ marginRight: "8px", padding: "4px" }}
        />
        <input
          placeholder="Role"
          value={newUser.role}
          onChange={e => setNewUser({ ...newUser, role: e.target.value })}
          style={{ marginRight: "8px", padding: "4px" }}
        />
        <input
          placeholder="Email"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
          style={{ marginRight: "8px", padding: "4px" }}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* 用户列表 */}
      {filteredUsers.map((user, index) => (
        <UserCard key={index} {...user} onDelete={handleDelete}/>
      ))}
    </div>
  );
}
