import React, { useState } from "react";

const FormApp = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>
        Welcome {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={inputEvent}
        />
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={inputEvent}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </>
  );
};

export default FormApp;
