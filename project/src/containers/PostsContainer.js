import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../components/Posts";
import { postsAction } from "../middleware/postsAction";

const PostsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsAction.mainPostsData());
  }, [dispatch]);

  const { userPosts, userPostsLength } = useSelector(({ posts }) => ({
    userPosts: posts.userPosts,
    userPostsLength: posts.userPostsLength,
  }));
  return (
    <div>
      <Posts userPosts={userPosts} userPostsLength={userPostsLength} />
    </div>
  );
};

export default PostsContainer;
