import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Detail } from "../components";
import { postsAction } from "../middleware/postsAction";
// import data from "../data.json";

const DetailContainer = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { userSignInInfor } = useSelector(({ signs }) => ({
    userSignInInfor: signs.userSignInInfor,
  }));

  const onChangeDetail = useCallback(
    (idData, userIdData, titleData, bodyData) => {
      dispatch(
        postsAction.postsUpdate(idData, userIdData, titleData, bodyData, nav)
      );
    },
    [dispatch, nav]
  );
  const onDeleteDetail = useCallback(
    (idData, userIdData) => {
      dispatch(postsAction.postDelete(idData, userIdData, nav));
    },
    [dispatch, nav]
  );

  return (
    <Detail
      userSignInInfor={userSignInInfor}
      onChangeDetail={onChangeDetail}
      onDeleteDetail={onDeleteDetail}
    />
  );
};

export default DetailContainer;
