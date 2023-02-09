import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartModalContainer from "../containers/CartModalContainer";
import CartModal from "./CartModal";
const Header = ({ signInTry, signInSucess, userSignInInfor, onLogout }) => {
  const [isClosed, setisClosed] = useState(true);

  return (
    <>
      <nav className="sticky-top">
        <Link className="brand" to="/">
          쇼핑몰입니다
        </Link>
        <ul className={`menu ${isClosed ? "" : "open"}`}>
          {signInSucess === false ? (
            signInTry == true ? (
              <li>다시 로그인해주세요</li>
            ) : (
              <li>로그인이 필요합니다</li>
            )
          ) : (
            <li>{userSignInInfor.sessionName}님 환영합니다</li>
          )}
          <li>
            {signInSucess === false ? (
              <Link to="/signUp" className="nav-link">
                회원가입
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {signInSucess === false ? (
              <Link to="/signIn" className="nav-link">
                로그인
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {signInSucess === false ? (
              ""
            ) : (
              <Link
                to="/mypage"
                className="nav-link"
                userSignInInfor={userSignInInfor}
              >
                마이페이지
              </Link>
            )}
          </li>
          <li>
            {signInSucess === false ? (
              ""
            ) : (
              <Link to="/todotemplate" className="nav-link">
                할일정리
              </Link>
            )}
          </li>
          <li>
            {signInSucess === false ? (
              ""
            ) : (
              <Link to="/posts" className="nav-link">
                자유게시판
              </Link>
            )}
          </li>
          <li>
            {signInSucess === false ? (
              ""
            ) : (
              <Link className="nav-link" onClick={onLogout}>
                로그아웃
              </Link>
            )}
          </li>
          <li>
            {signInSucess === false ? (
              ""
            ) : (
              <CartModalContainer userSignInInfor={userSignInInfor} />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default React.memo(Header);
