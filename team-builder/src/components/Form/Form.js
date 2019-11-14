import React, { useState, useEffect } from "react";
import "./Form.css";

const regEx = /^[a-zA-Z]*$/i;

export default function Form({
  onSubmit,
  member = {
    name: "",
    email: "",
    role: "",
    id: 0
  },
  members,
  isEditing,
  onUpdate,
  toggle
}) {
  const [formData, setFormData] = useState(member);

  useEffect(
    _ => {
      if (isEditing) setFormData({ ...member });
      else {
        let id = 0;
        if (members.length > 0) id = 1 + members[members.length - 1].id;
        setFormData({
          name: "",
          email: "",
          role: "",
          id: id
        });
      }
    },
    [members]
  );

  const handleChange = e => {
    const { name, value } = e.target;

    if (regEx.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
    console.log(formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  const handleUpdate = e => {
    onUpdate(formData);
    console.log(formData);
    toggle();
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
      {isEditing ? (
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button>Submit</button>
      )}
    </form>
  );
}
