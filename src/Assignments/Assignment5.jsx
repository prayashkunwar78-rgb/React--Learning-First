import { useState } from "react";

function Assignment5() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Assignment 5 - Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/>
        <textarea name="message" placeholder="Message" onChange={handleChange} /><br/>
        <button type="submit">Submit</button>
      </form>

      <h3>Output:</h3>
      <p>{form.name}</p>
      <p>{form.email}</p>
      <p>{form.message}</p>
    </div>
  );
}

export default Assignment5;