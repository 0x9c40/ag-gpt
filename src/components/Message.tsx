import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { toggleDashboard } from "../store/slices/layout";

import Layouted from "./Layouted";
import AppMarkdown from "./AppMarkdown";

import { Message } from "../types";
import { memo } from "react";

interface MessageProps {
  message: Message;
}

function Message({ message }: MessageProps) {
  const isDashboardOpened = useSelector(
    (state: RootState) => state.layout.isDashboardOpened,
  );

  const dispatch = useDispatch();

  return (
    <Layouted key={message.id}>
      <div className="mb-4 ml-8 mr-12 flex w-full">
        <div className="mr-5 w-6 shrink-0">
          <div className="flex h-6 w-6 place-content-center items-center justify-center rounded-full bg-slate-600 text-sm text-slate-100">
            {message.author == "ally" ? "A" : "Y"}
          </div>
        </div>
        {/* border-2 border-red-500 */}
        <div className="flex-1">
          <div className="select-none font-semibold">
            {message.author == "ally" ? "AllmaGPT" : "You"}
          </div>

          <div className="markdown prose w-full break-words">
            <AppMarkdown chartsData={message.content.chartsData}>
              {message.content.text}
            </AppMarkdown>
          </div>

          {message.content.chartsData ? (
            <div className="mt-3 flex w-full justify-end">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                  onClick={() => dispatch(toggleDashboard(!isDashboardOpened))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Layouted>
  );
}

const MemoizedMessage = memo(Message);

export default MemoizedMessage;
