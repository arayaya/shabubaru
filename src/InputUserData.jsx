import React from "react";

function InputUserData({ handleInputValue, noti, label }) {
  return (
    <>
      <p className="p-name">{label}</p>
      <input className="input-name" type="text" onChange={handleInputValue} />
      <p className="noti">{noti}</p>
    </>
  );
}

export default InputUserData;
