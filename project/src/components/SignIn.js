import React from "react";
import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";

const SignIn = ({
  signInIdinput,
  signInPwinput,
  signInchangeIdInput,
  signInchangePwInput,
  signInInsert,
}) => {
  const onChangeId = useCallback(
    (e) => {
      signInchangeIdInput(e.target.value);
    },
    [signInchangeIdInput]
  );
  const onChangePw = useCallback(
    (e) => {
      signInchangePwInput(e.target.value);
    },
    [signInchangePwInput]
  );
  const onSubmit = useCallback(
    (e) => {
      signInInsert(signInIdinput, signInPwinput);
      signInchangeIdInput(""); // value값 초기화
      signInchangePwInput(""); // value값 초기화
      e.preventDefault();
    },
    [
      signInInsert,
      signInchangeIdInput,
      signInchangePwInput,
      signInIdinput,
      signInPwinput,
    ]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <label>아이디</label>
      <input type="text" value={signInIdinput} onChange={onChangeId} />
      <label>비번</label>
      <input type="password" value={signInPwinput} onChange={onChangePw} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default React.memo(SignIn);
