import { currentUser } from "../variables";

const boolColor = (from) => {
  switch (from) {
    case "me":
      return "blue";

    case "you":
      return "green";

    default:
      return "";
  }
};

const isCUrrentUser = (id) => (id === currentUser.userID ? "me" : "you");
export { boolColor, isCUrrentUser };
