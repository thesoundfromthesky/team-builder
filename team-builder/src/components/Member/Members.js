import React, { useState, useEffect } from "react";

import Member from "./Member";

export default function Members({ members }) {
  const [renderList, setRenderList] = useState();

  useEffect(
    _ => {
      setRenderList(
        members.map(member => <Member key={member.id} member={member} />)
      );
    },
    [members]
  );

  return <div>{renderList}</div>;
}
