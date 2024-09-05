import React, { useState, useEffect } from "react";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFullName, setIsFullName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFullName(true);
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
          Last name :
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
          />
          <br clear="all" />
          <br clear="all" />
          <button type="submit">Submit</button>
          <br clear="all" />
          <br clear="all" />
          {isFullName ? `Full Name : ${firstName} ${lastName}` : null}
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
