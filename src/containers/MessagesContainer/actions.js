import { actionTypes } from "./constants";

const setMessages = (payload) => {
  return {
    type: actionTypes.SET_MESSAGES,
    payload,
  };
};

export { setMessages };
