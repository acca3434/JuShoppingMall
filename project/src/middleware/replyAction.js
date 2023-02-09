import axios from "axios";
import { replyData } from "../modules/reply";

function mainReplysData(id) {
  return async (dispatch, getState) => {
    const reply = await axios({
      method: "post",
      url: "http://localhost:8000/replyData",
      data: {
        id,
      },
    });
    if (reply.data) {
      dispatch(replyData(reply.data));
    }
  };
}

export const replyAction = { mainReplysData };
