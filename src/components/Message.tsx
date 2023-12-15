import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Square2StackIcon } from "@heroicons/react/24/outline";

import type { RootState } from "../store";
import type { Message } from "../types";

import { toggleDashboard } from "../store/slices/layout.ts";

import Layouted from "./Layouted";
import AppMarkdown from "./AppMarkdown";

interface MessageProps {
  message: Message;
}

function Message({ message }: MessageProps) {
  const isDashboardOpened = useSelector(
    (state: RootState) => state.layout.isDashboardOpened,
  );

  const dispatch = useDispatch();

  return (
    <Layouted>
      <div className="mb-4 ml-8 mr-12 flex w-full">
        <div className="mr-5 w-6 shrink-0">
          <div className="flex h-6 w-6 place-content-center items-center justify-center rounded-full bg-slate-600 text-sm text-slate-100">
            {message.author == "ally" ? "A" : "Y"}
          </div>
        </div>
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
                <Square2StackIcon
                  className="h-6 w-6"
                  onClick={() => dispatch(toggleDashboard(!isDashboardOpened))}
                />
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
