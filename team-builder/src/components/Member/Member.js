import React from "react";

export default function Member({ member }) {
  const { name, email, role } = member;
  return (
    <ol>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Role: {role}</li>
    </ol>
  );
}
