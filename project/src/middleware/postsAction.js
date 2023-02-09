import axios from "axios";
import { postsData } from "../modules/posts";

function mainPostsData() {
  return async (dispatch, getState) => {
    const posts = await axios({
      method: "get",
      url: "http://localhost:8000/postsData",
    });

    dispatch(postsData(posts.data));
  };
}

function postsUpdate(idData, userIdData, titleData, bodyData, nav) {
  return async (dispatch, getState) => {
    const posts = await axios({
      method: "post",
      url: "http://localhost:8000/postsUpdate",
      data: { idData, userIdData, titleData, bodyData },
    });
    if (posts.data[0] == 1) {
      nav("/posts");
    } else {
      console.log("다시 로그인하세요");
      nav("/");
    }
  };
}
function postDelete(idData, userIdData, nav) {
  return async (dispatch, getState) => {
    const posts = await axios({
      method: "post",
      url: "http://localhost:8000/postsDelete",
      data: { idData, userIdData },
    }).then(() => {
      nav("/posts");
    });
    if (posts.toString() == 2) {
      nav("/");
    }
  };
}
export const postsAction = { mainPostsData, postsUpdate, postDelete };
