import React, { useState, useEffect } from "react";

import Member from "./Member";

export default function Members({ members, onUpdate, onRemove }) {
  const [render, setRender] = useState();

  useEffect(
    _ => {
      setRender(
        members.map(member => (
          <Member
            key={member.id}
            member={member}
            members={members}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))
      );
    },
    [members]
  );

  return <div>{render}</div>;
}
