import React, { useRef } from "react";

const UncontrolledLogin = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    rememberRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <label>
        Remember me:
        <input type="checkbox" ref={rememberRef} />
      </label>
      <br />
      <button>Login</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default UncontrolledLogin;
