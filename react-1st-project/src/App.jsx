import React from "react";
import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";

function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </div>
  );
}

export default App;
