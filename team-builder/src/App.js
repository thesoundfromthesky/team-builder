import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import Members from "./components/Member/Members";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(_ => console.log(members), [members]);

  const handleSubmit = data => {
    setMembers(prev => [...prev, data]);
    console.log(`${JSON.stringify(data)} has been submit`);
  };

  const handleUpdate = data => {
    setMembers(members.map(member => (member.id === data.id ? data : member)));
    console.log(`${JSON.stringify(data)} has been updated`);
  };

  const handleRemove = data => {
    setMembers(members.filter(member => member.id !== data.id));
    console.log(`${JSON.stringify(data)} has been removed`);
  };
  return (
    <div className="App">
      <Form onSubmit={handleSubmit} members={members} />
      <br />
      <Members members={members} onUpdate={handleUpdate} onRemove={handleRemove}/>
    </div>
  );
}

export default App;
