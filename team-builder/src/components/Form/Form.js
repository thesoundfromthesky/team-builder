import React, { useState } from "react";
import "./Form.css";

const regEx = /^[a-zA-Z]*$/i;

export default function Form({ onSubmit }) {
  const initialState = { name: "", email: "", role: "", id: 0 };
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;

    regEx.test(value) && setFormData({ ...formData, [name]: value });

    console.log(formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const id = onSubmit(formData);
    // console.log(id);
    // initialState.id = ++id;
    onSubmit(formData);
    // setFormData(initialState);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
