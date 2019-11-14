import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import Members from "./components/Member/Members";

function App() {
  const initialState = [];
  const [members, setMembers] = useState(initialState);

  const handleSubmit = data => {
    console.log(data);
    setMembers([...members, data]);
    console.log(`${JSON.stringify(data)} has been submit`);
    console.log(members);
    // return members[members.length - 1];
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <br />
      <Members members={members} />
    </div>
  );
}

export default App;
