import React from "react";
import { useCallback } from "react";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SignUp = ({
  signUpIdinput,
  signUpPwinput,
  signUpNameinput,
  signUpchangeIdInput,
  signUpchangePwInput,
  signUpchangeNameInput,
  signUpInsert,
}) => {
  const onChangeUpId = useCallback(
    (e) => {
      signUpchangeIdInput(e.target.value);
    },
    [signUpchangeIdInput]
  );
  const onChangePw = useCallback(
    (e) => {
      signUpchangePwInput(e.target.value);
    },
    [signUpchangePwInput]
  );
  const onChangeUpName = useCallback(
    (e) => {
      signUpchangeNameInput(e.target.value);
    },
    [signUpchangeNameInput]
  );

  const onSubmit = useCallback(
    (e) => {
      console.log(signUpIdinput, signUpPwinput, signUpNameinput);
      signUpInsert(signUpIdinput, signUpPwinput, signUpNameinput);
      signUpchangeIdInput(""); // vlaue값 초기화
      signUpchangePwInput(""); // vlaue값 초기화
      signUpchangeNameInput(""); // vlaue값 초기화
      e.preventDefault();
    },
    [
      signUpInsert,
      signUpchangeIdInput,
      signUpchangePwInput,
      signUpchangeNameInput,
      signUpIdinput,
      signUpPwinput,
      signUpNameinput,
    ]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <label>아이디</label>
      <input value={signUpIdinput} onChange={onChangeUpId}></input>
      <label>비번</label>
      <input value={signUpPwinput} onChange={onChangePw}></input>
      <label>이름은?</label>
      <input value={signUpNameinput} onChange={onChangeUpName}></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default React.memo(SignUp);
