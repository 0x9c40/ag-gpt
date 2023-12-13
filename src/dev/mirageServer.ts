import { createServer, Response } from "miragejs";

createServer({
  routes() {
    this.timing = 0;
    this.logging = true;

    this.passthrough();

    this.get("/api/chats/:id", (_, request) => {
      const { id } = request.params;

      if (id == "1") return [];

      return {
        conversation: [
          {
            id: "0",
            content: "Hi, can you help me with data analysis?",
            author: "user",
          },
          {
            id: "1",
            content: "Of course, ask me any questions!",
            author: "ally",
          },
        ],
      };
    });

    this.get("/api/messages", () => {
      return [];
    });

    this.post("/api/messages", (schema, request) => {
      return request.requestBody;
    });
  },
});

// console.log("SCHEMA", schema);
// console.log("REQUEST", request);
