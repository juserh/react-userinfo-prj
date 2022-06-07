import React, { useState } from "react";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.length > 0 && age.length > 0) {
      if (age > 0) {
        const data = {
          id: Math.random().toString(),
          username: username,
          age: age,
        };
        props.onSaveUserData(data);
        setUsername("");
        setAge("");
      } else {
        alert("age 음수는 안돼요");
      }
    } else {
      alert("다 입력하셔야지요");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={username}
          ></input>
        </div>
        <div>
          <label>Age(Years)</label>
          <input type="text" onChange={ageChangeHandler} value={age}></input>
        </div>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default NewUserForm;
