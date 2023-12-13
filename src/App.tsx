import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import type { RootState } from "./store/index.ts";
import { useSelector, useDispatch } from "react-redux";
import {
  hideSidebar,
  toggleDashboard,
  toggleSidebar,
} from "./store/slices/layout.ts";
import { setActiveChatId } from "./store/slices/chats.ts";

import { getChat } from "./api/chats.ts";

import Sidebar from "./components/Sidebar.tsx";
import ConversationFlow from "./components/Converstaion.tsx";
import Dashboard from "./components/Dashboard.tsx";

export default function App() {
  const [chatsList, setChatsList] = useState([
    { title: "Chat about common goods.", id: "0" },
  ]);

  const isDashboardOpened = useSelector(
    (state: RootState) => state.layout.isDashboardOpened,
  );
  const isSidebarOpened = useSelector(
    (state: RootState) => state.layout.isSidebarOpened,
  );
  const actvieChatId = useSelector((state: RootState) => state.chats.activeId);
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { data: chatData } = useQuery({
    queryKey: ["chat", actvieChatId],
    queryFn: () => getChat(actvieChatId!),
    enabled: !!actvieChatId,
  });

  console.log("chatData", chatData);

  const { width } = useWindowSize();
  useEffect(() => {
    // dispatch(hideSidebar());
  }, [width, dispatch]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isSidebarOpened={isSidebarOpened}>
        <div
          className={isDashboardOpened ? "bg-cyan-400" : "bg-yellow-400"}
          onClick={() => dispatch(toggleDashboard(!isDashboardOpened))}
        >
          Here, I'm Sidebar!
        </div>

        {actvieChatId}

        {chatsList.map((chat) => {
          return (
            <div
              className="border-2 border-lime-500"
              onClick={() => dispatch(setActiveChatId(chat.id))}
              key={chat.id}
            >
              {chat.title}
            </div>
          );
        })}
      </Sidebar>

      <div className="relative h-full flex-1 overflow-hidden">
        <ConversationFlow conversation={chatData?.conversation} />

        <Dashboard />

        <div
          className="absolute left-0 top-1/2 h-10 w-10 border-2 border-black transition-all data-[state=opened]:max-md:left-60"
          onClick={() => dispatch(toggleSidebar(!isSidebarOpened))}
          data-state={isSidebarOpened ? "opened" : "hidden"}
        ></div>
      </div>
    </div>
  );
}
