import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../components";
import { signInchangeIdInput, signInchangePwInput } from "../modules/signs";
// import useActions from "../lib/useActions";
import WOW from "wowjs";
import { loginAction } from "../middleware/loginAction";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; // useCookies import

const SignInContainer = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["cookieUserKey"]);

  const nav = useNavigate();
  // useEffect(() => {
  //   new WOW.WOW({
  //     live: false,
  //   }).init();
  // }, []);

  const { signInIdinput, signInPwinput } = useSelector(({ signs }) => ({
    signInIdinput: signs.signInIdinput,
    signInPwinput: signs.signInPwinput,
  }));
  const onSignInchangeIdInput = useCallback(
    (input) => dispatch(signInchangeIdInput(input)),
    [dispatch]
  );
  const onSignInchangePwInput = useCallback(
    (input) => dispatch(signInchangePwInput(input)),
    [dispatch]
  );
  const onSignInInsert = useCallback(
    () =>
      dispatch(
        loginAction.login(signInIdinput, signInPwinput, cookies, setCookie, nav)
      ),
    [dispatch, signInIdinput, signInPwinput, nav, cookies, setCookie]
  );

  return (
    <SignIn
      signInIdinput={signInIdinput}
      signInPwinput={signInPwinput}
      signInchangeIdInput={onSignInchangeIdInput}
      signInchangePwInput={onSignInchangePwInput}
      signInInsert={onSignInInsert}
    />
  );
};

export default React.memo(SignInContainer);
