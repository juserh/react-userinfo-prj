import React from "react";
import "./UserData.css";

const UserData = (props) => {
  //props로 건네어 받기
  //const user1 = { username: "jihyun", age: "23" };
  return (
    <div className="user-data">
      {props.username}({props.age} years old)
    </div>
  );
};

export default UserData;
