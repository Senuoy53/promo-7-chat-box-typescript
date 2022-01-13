interface MessagesState {
  messages: Message[];
  lastIndex: number;
}

interface Message {
  userID: string;
  name: string;
  date: string;
  order: number;
  message: string;
  docId?: string;
}

export { MessagesState };
