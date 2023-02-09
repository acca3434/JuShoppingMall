import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../components";
import WOW from "wowjs";
import {
  signUpchangeIdInput,
  signUpchangePwInput,
  signUpchangeNameInput,
} from "../modules/signs";
import { loginAction } from "../middleware/loginAction";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  // useEffect(() => {
  //   new WOW.WOW({
  //     live: false,
  //   }).init();
  // }, []);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { signUpIdinput, signUpPwinput, signUpNameinput } = useSelector(
    ({ signs }) => ({
      signUpIdinput: signs.signUpIdinput,
      signUpPwinput: signs.signUpPwinput,
      signUpNameinput: signs.signUpNameinput,
    })
  );
  const onSignUpchangeIdInput = useCallback(
    (input) => dispatch(signUpchangeIdInput(input)),
    [dispatch]
  );
  const onSignUpchangePwInput = useCallback(
    (input) => dispatch(signUpchangePwInput(input)),
    [dispatch]
  );
  const onSignUpchangeNameInput = useCallback(
    (input) => dispatch(signUpchangeNameInput(input)),
    [dispatch]
  );
  const onSignUpInsert = useCallback(
    () =>
      dispatch(
        loginAction.signUp(signUpIdinput, signUpPwinput, signUpNameinput, nav)
      ),
    [dispatch, signUpIdinput, signUpPwinput, signUpNameinput, nav]
  );

  return (
    <SignUp
      signUpIdinput={signUpIdinput}
      signUpPwinput={signUpPwinput}
      signUpNameinput={signUpNameinput}
      signUpchangeIdInput={onSignUpchangeIdInput}
      signUpchangePwInput={onSignUpchangePwInput}
      signUpchangeNameInput={onSignUpchangeNameInput}
      signUpInsert={onSignUpInsert}
    />
  );
};

export default React.memo(SignUpContainer);
