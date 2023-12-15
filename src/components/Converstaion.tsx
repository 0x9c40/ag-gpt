import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import type { RootState } from "../store/index.ts";

import { getChat } from "../services/api/chats.ts";

import Layouted from "./Layouted.tsx";
import PromptTextarea from "./PromptTextarea.tsx";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import AppMessage from "./Message.tsx";

import { Message } from "../types/index.ts";

export default function Conversation() {
  const actvieChatId = useSelector((state: RootState) => state.chats.activeId);

  const { data: chatData } = useQuery({
    queryKey: ["chats", actvieChatId],
    queryFn: () => getChat(actvieChatId!),
    enabled: !!actvieChatId,
  });

  return (
    <main className="relative flex h-full w-full flex-col">
      <div
        className="relative flex-1 overflow-auto pt-6"
        id="messages-container"
      >
        {chatData?.conversation.map((message: Message) => (
          <AppMessage message={message} key={message.id} />
        ))}
      </div>

      <PromptTextarea></PromptTextarea>
    </main>
  );
}
