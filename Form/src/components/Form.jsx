import "./Form.css";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handelSubmit(event) {
    event.preventDefault();
    console.log("Name", name);
    console.log("email", email);
  }

  return (
    <div className="form">
      <h2>FORM</h2>
      <form onSubmit={handelSubmit}>
        <label>
          {/* Name : */}
          <input
            className="formInput"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          {/* Email : */}
          <input
            className="formInput"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
