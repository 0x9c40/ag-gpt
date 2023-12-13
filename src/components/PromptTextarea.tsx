import { MouseEvent } from "react";
import Layouted from "./Layouted";

export default function PromptTextarea() {
  async function postMessage(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const response = await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify("hey"),
    });
    const message = await response.json();
    console.log("MESSAGE", message);
  }

  return (
    <Layouted>
      <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="flex w-full items-center">
            <div className="[&:has(textarea:focus)]:border-token-border-xheavy dark:border-token-border-heavy border-token-border-heavy relative flex w-full flex-grow flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:bg-gray-800 dark:text-white dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)] [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)]">
              <textarea
                id="prompt-textarea"
                tabIndex={0}
                data-id="4180d208-b95c-4a82-b5fc-206659f7e664"
                rows={1}
                placeholder="Talk to AllmaGenGPT..."
                className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pl-4 pr-10 placeholder-black/50 focus:ring-0 focus-visible:ring-0 dark:bg-transparent dark:placeholder-white/50 md:py-3.5 md:pr-12"
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
      </form>
    </Layouted>
  );
}
