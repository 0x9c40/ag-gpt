import { sample } from "lodash-es";
import { nanoid } from "nanoid";
import { createServer, Response } from "miragejs";
import Fuse from "fuse.js";

import { Chat, Message } from "../types";

import promptsList from "./data/prompts.json";
import mdMocks from "./data/markdown-mocks.json";
// import tableMocks from "./data/table-mocks.json";

import { chats } from "./data/chats.ts";

const fuseOptions = {
  keys: ["prompt"],
};

const fuse = new Fuse(promptsList, fuseOptions);

createServer({
  routes() {
    this.timing = 0;
    this.logging = true;

    this.passthrough();

    this.get("/api/chats", (): Chat[] => {
      const result = [];

      for (const key in chats) {
        result.push(chats[key]);
      }

      return result;
    });

    this.post("/api/chats", () => {
      console.log("TODO: create new chat");
      return new Response(404);
    });

    this.get("/api/chats/:id", (_, request) => {
      const { id } = request.params;

      return chats[id];
    });

    this.post("/api/messages", (_schema, request) => {
      return request.requestBody;
    });

    this.post(
      "/api/chats/:chatId/conversation",
      (_schema, request): Message[] => {
        const { chatId } = request.params;
        const clientMessage = JSON.parse(request.requestBody);

        const prompt = clientMessage.content.text;
        console.log("prompt:", prompt, fuse.search(prompt));

        const serverMessage = {
          id: nanoid(),
          ...clientMessage,
        };

        const newAllyMessage: Message = {
          id: nanoid(),
          author: "ally",
          content: {
            text: mdMocks[
              fuse.search(prompt)[0]?.item.index || sample([0, 1, 2, 3, 4])
            ],
          },
        };

        chats[chatId].conversation.push(serverMessage);
        chats[chatId].conversation.push(newAllyMessage);

        return chats[chatId].conversation;
      },
    );
  },
});
