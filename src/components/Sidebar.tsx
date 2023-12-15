import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

import type { RootState } from "../store";

import { setActiveChatId } from "../store/slices/chats.ts";
import { getListOfChats } from "../services/api/chats.ts";

import appLogo from "../assets/logo.png";

import Account from "./Account.tsx";

function Sidebar() {
  const isSidebarOpened = useSelector(
    (state: RootState) => state.layout.isSidebarOpened,
  );
  const actvieChatId = useSelector((state: RootState) => state.chats.activeId);

  const { data: chatsList } = useQuery({
    queryKey: ["chats"],
    queryFn: getListOfChats,
    initialData: [],
  });

  const dispatch = useDispatch();

  return (
    <>
      {/* the empty dummy element that takes a part in normal document flow*/}
      <div
        className={classNames(
          "hidden h-full transition-all md:block",
          isSidebarOpened ? "w-60" : "w-0",
        )}
      ></div>

      {/* the real nav with absolute position to avoid problems with overflow */}
      <nav
        className={classNames(
          "absolute z-10 flex h-full w-60 flex-col items-stretch border-r border-r-slate-200 bg-white p-2 pr-0 backdrop-saturate-200 transition-all",
          isSidebarOpened ? "left-0" : "-left-60",
        )}
      >
        <div className="mb-2 mr-2 flex h-12 select-none items-center rounded-lg px-2 hover:bg-gray-100">
          <img className="mr-2" src={appLogo} alt="" height={30} width={30} />
          <span className="text-lg font-semibold">AllmaGen</span>
        </div>

        <button className="mb-4 mr-2 flex h-10 items-center gap-2 rounded-lg px-2 font-semibold hover:bg-gray-100">
          <PencilSquareIcon className="ml-1 h-6 w-6"></PencilSquareIcon>

          <span>Create new</span>
        </button>

        <div className="max-w-full flex-1 overflow-auto">
          {chatsList.map((chat) => {
            return (
              <div
                key={chat.id}
                className={classNames(
                  "mb-1 max-w-[calc(100%-1rem)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-2 py-1 hover:bg-slate-100",
                  chat.id == actvieChatId && "bg-slate-100",
                )}
                onClick={() => dispatch(setActiveChatId(chat.id))}
              >
                {chat.title}
              </div>
            );
          })}
        </div>

        <Account />
      </nav>
    </>
  );
}

export default Sidebar;
