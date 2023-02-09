import React, { useCallback } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";
import { loginAction } from "../middleware/loginAction";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [, , removeCookie] = useCookies(["cookieUserKey"]);

  const { signInTry, signInSucess, userSignInInfor } = useSelector(
    ({ signs }) => ({
      signInTry: signs.signInTry,
      signInSucess: signs.signInSucess,
      userSignInInfor: signs.userSignInInfor,
    })
  );
  const onLogout = useCallback(
    () => dispatch(loginAction.logOut(removeCookie, nav)),
    [dispatch, nav, removeCookie]
  );
  return (
    <div>
      <Header
        signInTry={signInTry}
        signInSucess={signInSucess}
        userSignInInfor={userSignInInfor}
        onLogout={onLogout}
      />
    </div>
  );
};

export default HeaderContainer;
