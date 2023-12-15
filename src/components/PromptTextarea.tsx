import { MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

import type { RootState } from "../store";

import { sendMessage } from "../services/api/chats.ts";

import Layouted from "./Layouted";

export default function PromptTextarea() {
  const [messageText, setMessageText] = useState("");
  const actvieChatId = useSelector((state: RootState) => state.chats.activeId);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
      setTimeout(() => {
        document
          .querySelector("#messages-container")
          ?.scrollTo({ top: 1000000000, behavior: "smooth" });
        setMessageText("");
      }, 100);
    },
  });

  async function postMessage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const message = {
      author: "user",
      content: {
        text: messageText,
      },
    } as const;

    mutation.mutate({ chatId: actvieChatId!, message });
  }

  return (
    <Layouted>
      <form className="mb-4 ml-4 mr-6 w-full rounded-lg border border-slate-200 bg-white shadow-sm focus-within:border-slate-400">
        <div className="flex w-full items-end rounded-lg px-4 pb-4">
          <TextareaAutosize
            className="mb-1 mr-4 max-h-28 flex-1 resize-none overflow-auto bg-transparent outline-none"
            value={messageText}
            onInput={(event) => setMessageText(event.currentTarget.value)}
          />

          <button
            className="mt-4 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-500 text-white transition-colors enabled:hover:bg-slate-700 disabled:opacity-20"
            disabled={!messageText}
            onClick={postMessage}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </Layouted>
  );
}
