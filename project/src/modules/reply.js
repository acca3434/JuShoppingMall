import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const REPLY_DATALOAD = "reply/REPLY_DATALOAD";

export const replyData = createAction(REPLY_DATALOAD, (reply) => ({
  reply,
}));

const initialState = {
  userReply: null,
  userReplyLength: null,
};

const reply = handleActions(
  {
    [REPLY_DATALOAD]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.userReply = payload.reply;
        draft.userReplyLength = payload.reply.length;
      }),
  },
  initialState
);

export default reply;
