import { Message } from "../../utils/types";
import { ActionTypes } from "./constants";

const setMessages = (payload: Message[]) => {
  return {
    type: ActionTypes.SET_MESSAGES,
    payload,
  };
};

export { setMessages };
