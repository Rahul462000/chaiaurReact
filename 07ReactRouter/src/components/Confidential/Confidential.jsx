import React from "react";
import { useParams } from "react-router-dom";

function Confidential() {
  const { userid } = useParams();
  return (
    <>
      <h1
        className="bg-gray-600 text-white
      texxt-3xl p-4"
      >
        User: {userid}{" "}
      </h1>
    </>
  );
}

export default Confidential;
