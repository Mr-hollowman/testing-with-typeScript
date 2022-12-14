import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("error fetching users"));
  });

  return (
    <div>
        <h1>Users</h1>
        {error && <p>{error}</p> }

        <ul>
            {users.map((user)=>{
                return(
                    <li key={user}>{user}</li>
                )
            })}
        </ul>
    </div>
  );
}
