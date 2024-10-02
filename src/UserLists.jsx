import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserLists.css"
const getUser = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await users.data;
  return data;
};
const UserLists = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = async () => {
      const data = await getUser();
      setUsers(data);
    };
    data();
  }, []);
  return (
    <div className="users">
      {users.map((user, index) => {
        {
          console.log(user);
        }
        return (
          <div key={index} className="container">
            <p>Name:{user.name}</p>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <p>Tel:{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserLists;
