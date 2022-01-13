import { createSelector } from "reselect";

const selectFromMessagesStateDomain = (globalState) =>
  globalState.messagesState;

const makeSelectMessagesData = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState) => messagesState.messages
  );

const makeSelectLastIndex = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState) => messagesState.lastIndex
  );

export { makeSelectMessagesData, makeSelectLastIndex };
