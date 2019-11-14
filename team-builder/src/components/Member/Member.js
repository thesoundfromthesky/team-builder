import React, { useState } from "react";

import Form from "../Form/Form";

export default function Member({ member, members, onUpdate, onRemove }) {
  const { id, name, email, role } = member;
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = _ => setIsEditing(!isEditing);

  const handleRemove = e => {
    onRemove(member);
  };
  return (
    <>
      {isEditing ? (
        <Form
          member={member}
          members={members}
          isEditing={isEditing}
          toggle={toggleEditing}
          onUpdate={onUpdate}
        />
      ) : (
        <ol>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Role: {role}</li>
        </ol>
      )}
      <button type="button" onClick={toggleEditing}>
        {isEditing ? "Back" : "Edit"}
      </button>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </>
  );
}
