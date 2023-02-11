// hook

import { useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

export default useFormInput;

// use

// function LoginForm() {
//     const [username, setUsername] = useFormInput('');
//     const [password, setPassword] = useFormInput('');

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(username, password);
//       // Perform some action with the form data
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={setUsername} placeholder="Username" />
//         <input type="password" value={password} onChange={setPassword} placeholder="Password" />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
