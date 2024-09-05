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
    <div>
      <div style={{ width: 500, margin: 50 }}>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          First Name :
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <br clear="all" />
          <br clear="all" />
          Last Name :
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <br clear="all" />
          <br clear="all" />
          <button type="submit">Submit</button>
          <br clear="all" />
          <br clear="all" />
          {fullName && `Full Name: ${fullName}`}
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
