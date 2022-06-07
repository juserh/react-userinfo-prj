import React from "react";
import UserList from "./UserList";
import NewUserForm from "../NewUser/NewUserForm";

const Users = (props) => {
  const saveUserdataList = (data) => {
    props.onUpdate(data);
  };
  return (
    <div>
      <NewUserForm onSaveUserData={saveUserdataList} />
      <UserList userdata={props.data} />
    </div>
  );
};

export default Users;
