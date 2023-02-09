import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const POSTS_DATALOAD = "posts/POSTS_DATALOAD";

export const postsData = createAction(POSTS_DATALOAD, (posts) => ({
  posts,
}));

const initialState = {
  userPosts: null,
  userPostsLength: null,
};

const posts = handleActions(
  {
    [POSTS_DATALOAD]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.userPosts = payload.posts;
        draft.userPostsLength = payload.posts.length;
      }),
  },
  initialState
);

export default posts;
