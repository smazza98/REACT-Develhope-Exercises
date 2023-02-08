// ops già fatto

import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password, remember });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <label>
        Remember me:
        <input
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
      </label>
      <br />
      <button disabled={!username || !password}>Login</button>
    </form>
  );
};

export default Login;
