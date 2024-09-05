import React, { useState } from "react";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div style={{ margin: 50, width: 500 }}>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <h1>Full Name Display</h1>
        First Name:
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <br clear="all" />
        Last Name:
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <br clear="all" />
        <button type="submit">Submit</button>
        <br clear="all" />
      </form>
      <div style={{ textAlign: "left" }}>
        {fullName && `Full Name: ${fullName}`}
      </div>
    </div>
  );
};

export default FormComponent;
