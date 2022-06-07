import React from "react";
import Card from "../UI/Card";
import UserData from "./UserData";

const UserList = (props) => {
  // const userdata = [
  //   { id: "1", username: "jihyun", age: "23" },
  //   { id: "2", username: "heeyoung", age: "48" },
  // ];
  return (
    <Card>
      {props.userdata.map((user, index) => (
        <UserData key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
};

export default UserList;
