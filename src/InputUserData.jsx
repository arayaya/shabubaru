import React from "react";

function InputUserData({ handleInputValue, noti }) {
  return (
    <>
      <input className="input-name" type="text" onChange={handleInputValue} />
      <p className="noti">{noti}</p>
    </>
  );
}

export default InputUserData;
