export type Chats = {
  [key: string]: Chat;
};

export interface Chat {
  id: string;
  title: string;
  conversation: Message[];
  dashboard?: string;
}

export interface Message {
  id: string;
  author: "user" | "ally";
  content: MessageContent;
}

export interface MessageContent {
  text: string;
  chartsData?: object;
}
