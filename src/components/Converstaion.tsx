import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import type { RootState } from "../store";

import { getChat } from "../services/api/chats.ts";

import AppMessage from "./Message.tsx";
import PromptTextarea from "./PromptTextarea.tsx";

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
        {chatData?.conversation.map((message) => (
          <AppMessage key={message.id} message={message} />
        ))}
      </div>

      <PromptTextarea></PromptTextarea>
    </main>
  );
}
