import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { replyAction } from "../middleware/replyAction";
import RecentComments from "./RecentComments";

const Detail = ({
  userSignInInfor,
  onChangeDetail,
  onDeleteDetail,
  mainReplysData,
}) => {
  const dispatch = useDispatch();

  // 게시판인덱스,게시판글작성자
  const { id, postId, postTitle, postContent } = useParams();

  useEffect(() => {
    dispatch(replyAction.mainReplysData(id));
  }, [dispatch, id]);

  const { userReply, userReplyLength } = useSelector(({ reply }) => ({
    userReply: reply.userReply,
    userReplyLength: reply.userReplyLength,
  }));

  const [readOnly, setReadOnly] = useState(true);
  const nav = useNavigate();
  const [idData, setIdData] = useState(id);
  const [userIdData, setUserIdData] = useState(postId);
  const [titleData, setTitleData] = useState(postTitle);
  const [bodyData, setBodyData] = useState(postContent);

  const onChangeId = useCallback((e) => {
    setIdData(e.target.value);
  }, []);
  const onChangeUserId = useCallback((e) => {
    setUserIdData(e.target.value);
  }, []);
  const onChangeTitle = useCallback((e) => {
    setTitleData(e.target.value);
  }, []);
  const onChangeBody = useCallback((e) => {
    setBodyData(e.target.value);
  }, []);

  const postsUpdate = useCallback(() => {
    onChangeDetail(idData, userIdData, titleData, bodyData);
  }, [idData, userIdData, titleData, bodyData, onChangeDetail]);

  const postsDelete = useCallback(() => {
    onDeleteDetail(idData, userIdData);
  }, [onDeleteDetail, idData, userIdData]);

  const readOnlyOnOff = () => {
    if (readOnly === true) {
      setReadOnly(false);
    } else if (readOnly === false) {
      postsUpdate();
    }
  };

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>
      <div className="post-view-wrapper container">
        <div className="post-view-row">
          <label>게시글 번호</label>
          <input value={idData} readOnly={true} onChange={onChangeId}></input>
        </div>
        <div className="post-view-row">
          <label>유저이름</label>
          <input
            value={userIdData}
            readOnly={true}
            onChange={onChangeUserId}
          ></input>
        </div>
        <div className="post-view-row">
          <label>제목</label>
          <input
            value={titleData}
            readOnly={readOnly}
            onChange={onChangeTitle}
          ></input>
        </div>
        <div className="post-view-row">
          <label>내용</label>
          <textarea
            value={bodyData}
            readOnly={readOnly}
            style={{ height: "500px" }}
            onChange={onChangeBody}
          ></textarea>
        </div>
        <button className="post-view-go-list-btn" onClick={() => nav("/posts")}>
          목록으로 돌아가기
        </button>
        {userSignInInfor.sessionId === userIdData ? (
          <>
            <button
              className="post-view-go-list-btn"
              style={{ marginLeft: "30px" }}
              onClick={readOnlyOnOff}
            >
              수정하기
            </button>
            <button
              className="post-view-go-list-btn"
              style={{ marginLeft: "30px" }}
              onClick={postsDelete}
            >
              삭제하기
            </button>
            <button
              className="post-view-go-list-btn"
              style={{ marginLeft: "30px" }}
              onClick={postsDelete}
            >
              댓글쓰기
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <hr className="bs5" />
      <RecentComments userReply={userReply} userReplyLength={userReplyLength} />
    </>
  );
};

export default Detail;
