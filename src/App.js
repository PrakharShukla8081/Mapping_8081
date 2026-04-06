import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <>
      <div className="cards">
        {users.map((s1) => (
          <div className="card">{s1.email}</div>
        ))}
      </div>
    </>
  );
}
