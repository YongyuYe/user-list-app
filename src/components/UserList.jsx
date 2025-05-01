import UserCard from './UserCard';

const users = [
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
];


export default function UserList() {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}
