import { Chats } from "../../types";

import mdMocks from "../data/markdown-mocks.json";

const chats: Chats = {
  "0": {
    title: "Chat about common goods. And other things",
    id: "0",
    conversation: [
      {
        id: "0",
        author: "user",
        content: {
          text: 'Hi, can you help me with data analysis?<Chart id="0"></Chart>\n\n',
        },
      },
      {
        id: "1",
        author: "ally",
        content: {
          text: mdMocks[0] + "\n\n<Chart></Chart>\n\n\n\nk",
          chartsData: { type: "donut", series: [44, 55, 41, 17, 15] },
        },
      },
      {
        id: "2",
        author: "user",
        content: {
          text: "blalablabla",
        },
      },
      {
        id: "3",
        author: "ally",
        content: {
          text:
            "### Summary:\nThis week, apart from the rise in " +
            "\n\n<Chart></Chart>\n\n\n\nk",
          chartsData: { type: "donut", series: [44, 55, 41] },
        },
      },
    ],
    dashboard: "Fisrt chat Investigation flow",
  },
  "1": { title: "Chat about economic goods.", id: "1", conversation: [] },
};

export { chats };
