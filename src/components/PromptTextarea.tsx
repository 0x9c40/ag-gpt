import TextareaAutosize from "react-textarea-autosize";

import { MouseEvent, useState } from "react";
import Layouted from "./Layouted";
import { sendMessage } from "../services/api/chats";
import { Message } from "../types";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

    mutation.mutate({ chatId: actvieChatId, message });

    // const response = await sendMessage({ chatId: actvieChatId, message });

    // console.log("POST RESPONSE", response);
  }

  return (
    <Layouted>
      <form className="mb-4 ml-4 mr-6 w-full rounded-lg border border-slate-200 bg-white shadow-sm focus-within:border-slate-400">
        <div className="flex w-full items-end rounded-lg px-4 pb-4">
          <TextareaAutosize
            className="mr-4 max-h-28 flex-1 resize-none overflow-auto bg-transparent outline-none"
            value={messageText}
            onInput={(event) => setMessageText(event.currentTarget.value)}
          />

          <button
            className="mt-4 rounded-lg border border-black p-0.5 text-white transition-colors enabled:bg-black disabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:disabled:bg-white dark:disabled:hover:bg-transparent"
            onClick={postMessage}
          >
            <span className="" data-state="closed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white dark:text-black"
              >
                <path
                  d="M7 11L12 6L17 11M12 18V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </form>
      {/* <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="flex w-full items-center">
            <div className="[&:has(textarea:focus)]:border-token-border-xheavy dark:border-token-border-heavy border-token-border-heavy relative flex w-full flex-grow flex-col overflow-hidden rounded-2xl border bg-white dark:text-white">
              <textarea
                // id="prompt-textarea"
                // tabIndex={0}
                // rows={1}
                // placeholder="Talk to AllmaGenGPT..."
                // className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pl-4 pr-10 placeholder-black/50 focus:ring-0 focus-visible:ring-0 dark:bg-transparent dark:placeholder-white/50 md:py-3.5 md:pr-12"
                className="max-h-28"
              ></textarea>

              <button
                className="absolute bottom-1.5 right-2 rounded-lg border border-black p-0.5 text-white transition-colors enabled:bg-black disabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-gray-900 dark:disabled:bg-white dark:disabled:hover:bg-transparent md:bottom-3 md:right-3"
                data-testid="send-button"
                onClick={postMessage}
              >
                <span className="" data-state="closed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white dark:text-black"
                  >
                    <path
                      d="M7 11L12 6L17 11M12 18V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form> */}
    </Layouted>
  );
}
