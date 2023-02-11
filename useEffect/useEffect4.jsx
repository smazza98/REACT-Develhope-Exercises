import React, { useState, useEffect } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(usernames);
  }, [usernames]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddUsername = () => {
    setUsernames([...usernames, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h1>Github User List</h1>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddUsername}>Add username</button>
      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}
    </div>
  );
};

export default GithubUserList;
