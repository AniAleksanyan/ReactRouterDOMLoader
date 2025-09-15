import { useLoaderData } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

export const usersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to load users");
  return res.json();
};

export default function Users() {
  const users = useLoaderData() as User[];

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
}