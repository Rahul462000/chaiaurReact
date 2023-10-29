import React, { useContext } from "react";
import LoginContext from "../contextFiles/LoginContext";

function Profile() {
  const { userProfile } = useContext(LoginContext);
  if (!userProfile) return <div>Please login</div>;
  return (
    <>
      Welcome {userProfile.username}{" "}
      {`your login password is ${userProfile.password}`}
    </>
  );
}

export default Profile;
