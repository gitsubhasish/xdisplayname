import React, { useState } from "react";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ margin: 50 }}>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <h1>Full Name Display</h1>
        First Name:
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <br clear="all" />
        Last Name:
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <br clear="all" />
        <button type="submit">Submit</button>
        <br clear="all" />
        <span style={{ marginLeft: 0 }}>
          {fullName && `Full Name: ${fullName}`}
        </span>
      </form>
    </div>
  );
};

export default FormComponent;
