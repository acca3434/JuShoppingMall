import axios from "axios";
import {
  signInInsert,
  signUpInsert,
  signinMainSignCheckIN,
  siteLogout,
} from "../modules/signs";
function loginCheck(cookies, setCookie, nav) {
  if (window.sessionStorage.getItem("accesstoken")) {
    return async (dispatch, getState) => {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/",
        data: {
          sessionKey: String(window.sessionStorage.getItem("accesstoken")), // aT
        },
      });
      if (!data) {
        dispatch(signinMainSignCheckIN(null, null, null, nav));
      } else if (data[0]) {
        setCookie("cookieUserKey", data[0].refresh_token, {
          secure: true,
          sameSite: "none",
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        window.sessionStorage.setItem("accesstoken", data[0].access_token);
        dispatch(
          signinMainSignCheckIN(
            data[0].user_id,
            data[0].user_pw,
            data[0].user_name,
            nav
          )
        );
      }
    };
  } else {
    return async (dispatch, getState) => {
      await dispatch(signinMainSignCheckIN(null, null, null));
    };
  }
}

function login(signInIdinput, signInPwinput, cookies, setCookie, nav) {
  return async (dispatch, getState) => {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/signIn",
      data: {
        signInIdinput,
        signInPwinput,
      },
    });
    if (data[0]) {
      setCookie("cookieUserKey", data[0].refresh_token, {
        // rT
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7, //7일 저장
      });
      window.sessionStorage.setItem("accesstoken", data[0].access_token); // aT
      dispatch(
        signInInsert(data[0].user_id, data[0].user_pw, data[0].user_name, nav)
      );
    } else if (!data[0]) {
      console.log("회원 정보가 없습니다");
      dispatch(signInInsert(null, null, null, nav));
    }
  };
}

function logOut(removeCookie, nav) {
  return (dispatch, getState) => {
    window.sessionStorage.removeItem("accesstoken");
    removeCookie("cookieUserKey", { path: "/" });
    dispatch(siteLogout(nav));
  };
}

function signUp(signUpIdinput, signUpPwinput, signUpNameinput, nav) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      data: {
        signUpIdinput, //dd
        signUpPwinput, // dd
        signUpNameinput, // 주병현
      },
    });
    if (user.data == "회원이 이미 있습니다") {
      console.log("회원이 이미 있습니다");
      dispatch(signUpInsert(null, null, null, nav));
    } else {
      console.log("회원이 없다면 여기로");
      dispatch(
        signUpInsert(
          user.data.user_id,
          user.data.user_pw,
          user.data.user_name,
          nav
        )
      );
    }
  };
}
export const loginAction = { login, signUp, logOut, loginCheck };
