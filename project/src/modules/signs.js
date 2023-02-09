import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SIGNIN_MAINSIGNCHECKIN = "signs/SIGNIN_MAINSIGNCHECKIN";

const SIGNIN_CHANGEIDINPUT = "signs/SIGNIN_CHANGEIDINPUT";
const SIGNIN_CHANGEPWINPUT = "signs/SIGNIN_CHANGEPWINPUT";

const SIGNUP_CHANGEIDINPUT = "signs/SIGNUP_CHANGEIDINPUT";
const SIGNUP_CHANGEPWINPUT = "signs/SIGNUP_CHANGEPWINPUT";
const SIGNUP_CHANGENAMEINPUT = "signs/SIGNUP_CHANGENAMEINPUT";
const LOGOUT = "signs/LOGOUT";

const SIGNIN_INSERT = "signs/SIGNIN_INSERT";
const SIGNUP_INSERT = "signs/SIGNUP_INSERT";

export const siteLogout = createAction(LOGOUT, (nav) => ({
  nav,
}));

export const signinMainSignCheckIN = createAction(
  SIGNIN_MAINSIGNCHECKIN,
  (sessionId, sessionPw, sessionName) => ({
    sessionId,
    sessionPw,
    sessionName,
  })
);

export const signInchangeIdInput = createAction(
  SIGNIN_CHANGEIDINPUT,
  (input) => input
);
export const signInchangePwInput = createAction(
  SIGNIN_CHANGEPWINPUT,
  (input) => input
);
export const signUpchangeIdInput = createAction(
  SIGNUP_CHANGEIDINPUT,

  (input) => input
);
export const signUpchangePwInput = createAction(
  SIGNUP_CHANGEPWINPUT,
  (input) => input
);
export const signUpchangeNameInput = createAction(
  SIGNUP_CHANGENAMEINPUT,
  (input) => input
);

export const signInInsert = createAction(
  SIGNIN_INSERT,
  (sessionId, sessionPw, sessionName, nav) => ({
    sessionId,
    sessionPw,
    sessionName,
    nav,
  })
);

export const signUpInsert = createAction(
  SIGNUP_INSERT,
  (sessionId, sessionPw, sessionName, nav) => ({
    sessionId,
    sessionPw,
    sessionName,
    nav,
  })
);

const initialState = {
  signInIdinput: "",
  signInPwinput: "",
  signUpIdinput: "",
  signUpPwinput: "",
  signUpNameinput: "",
  signInTry: false,
  signInSucess: false,
  logout: false,
  userSignInInfor: {
    sessionId: null,
    sessionPw: null,
    sessionName: null,
    nav: null,
  },
};

const signs = handleActions(
  {
    [SIGNIN_CHANGEIDINPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.signInIdinput = input;
      }),
    [SIGNIN_CHANGEPWINPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.signInPwinput = input;
      }),
    [SIGNUP_CHANGEIDINPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.signUpIdinput = input;
      }),
    [SIGNUP_CHANGEPWINPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.signUpPwinput = input;
      }),
    [SIGNUP_CHANGENAMEINPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.signUpNameinput = input;
      }),
    [SIGNIN_INSERT]: (state, { payload: signInInfo }) =>
      produce(state, (draft) => {
        if (signInInfo.sessionId) {
          draft.userSignInInfor = signInInfo;
          alert(`${draft.userSignInInfor.sessionName}님 환영합니다`);
          draft.signInTry = true;
          draft.signInSucess = true;
          signInInfo.nav("/");
        } else if (!signInInfo.sessionId) {
          draft.signInTry = true;
          draft.signInSucess = false;
          signInInfo.nav("/signIn");
        }
      }),
    [SIGNUP_INSERT]: (state, { payload: signUpInfo }) =>
      produce(state, (draft) => {
        if (signUpInfo.sessionId != null) {
          draft.userSignInInfor = signUpInfo;
          alert(`${draft.userSignInInfor.sessionName}님 환영합니다`);
          signUpInfo.nav("/");
        } else if (signUpInfo.sessionId == null) {
          alert("동일한 아이디가 있습니다");
          draft.signInTry = false;
          draft.signInSucess = false;
          signUpInfo.nav("/signUp");
        }
      }),
    [SIGNIN_MAINSIGNCHECKIN]: (state, { payload: signCheck }) =>
      produce(state, (draft) => {
        if (!signCheck.sessionId) {
          draft.userSignInInfor.sessionId = null;
          draft.userSignInInfor.sessionPw = null;
          draft.userSignInInfor.sessionName = null;
          draft.signInTry = false;
          return;
        } else if (signCheck.sessionId) {
          draft.userSignInInfor = signCheck;
          draft.signInTry = true;
          draft.signInSucess = true;
          return;
        }
      }),
    [LOGOUT]: (state, { payload: nav }) =>
      produce(state, (draft) => {
        draft.userSignInInfor.sessionId = null;
        draft.userSignInInfor.sessionPw = null;
        draft.userSignInInfor.sessionName = null;
        nav("/");
      }),
  },
  initialState
);

export default signs;
