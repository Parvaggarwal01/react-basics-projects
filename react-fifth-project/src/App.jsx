import { useEffect, useState } from "react";
import { User } from "./User";

function App() {
  const [isLoding, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: AbortController.signal,
    })
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Users List</h1>
      {isLoding ? (
        <h2>Loding......</h2>
      ) : (
        <ul>
          {users.map((user) => {
            return <User key={user.id} name={user.name} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
