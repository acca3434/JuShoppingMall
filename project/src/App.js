import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "./middleware/loginAction";
import { useCookies } from "react-cookie"; // useCookies import
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./components/header.scss";
import {
  HeaderContainer,
  SignInContainer,
  SignUpContainer,
} from "./containers";
import "./components/animate.min.css";
import { ProductionContainer } from "./containers";
import { PostsContainer } from "./containers";
import { DetailContainer } from "./containers";

function App() {
  const [cookies, setCookie] = useCookies(["cookieUserKey"]); // 쿠키 훅
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    dispatch(loginAction.loginCheck(cookies, setCookie, nav));
  });

  return (
    <div className="App" style={{ margin: "top", marginBlock: "top" }}>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<ProductionContainer />} />
        <Route path="/signIn" element={<SignInContainer />} />
        <Route path="/signUp" element={<SignUpContainer />} />
        <Route path="/posts" element={<PostsContainer />} />
        <Route
          path="/detail/:id/:postId/:postTitle/:postContent"
          element={<DetailContainer />}
        />
      </Routes>
    </div>
  );
}

export default App;
