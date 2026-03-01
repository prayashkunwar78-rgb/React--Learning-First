import { useState } from "react";

function Assignment6() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!data.name) newErrors.name = "Name required";
    if (!data.email) newErrors.email = "Email required";
    else if (!data.email.includes("@.")) newErrors.email = "Email must include @.";

    if (!data.password) newErrors.password = "Password required";
    else if (data.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords not match";

    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Assignment 6 - Validation</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.name}</p>

        <input name="email" placeholder="Email" onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.email}</p>

        <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.password}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.confirmPassword}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Assignment6;