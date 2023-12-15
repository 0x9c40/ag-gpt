import appLogo from "../assets/logo.png";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { setActiveChatId } from "../store/slices/chats";
import { useQuery } from "@tanstack/react-query";
import { getListOfChats } from "../services/api/chats.ts";

import Account from "./Account.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";

function Sidebar() {
  const isSidebarOpened = useSelector(
    (state: RootState) => state.layout.isSidebarOpened,
  );

  const { data: chatsList } = useQuery({
    queryKey: ["chats"],
    queryFn: () => getListOfChats(),
  });

  const actvieChatId = useSelector((state: RootState) => state.chats.activeId);
  const dispatch = useDispatch();

  return (
    <>
      {/* the empty dummy element that takes a part in normal document flow*/}
      {/* pattern-diagonal-lines pattern-bg-white pattern-green-500  */}
      <div
        className="hidden h-full w-60 transition-all data-[state=hidden]:w-0 md:block"
        data-state={isSidebarOpened ? "opened" : "hidden"}
      ></div>

      {/* the real nav with absolute position to avoid problems with overflow */}
      {/* pattern-paper pattern-lime-500 */}
      <nav
        className="absolute left-0 z-10 flex h-full w-60 flex-col items-stretch border-r border-r-slate-200 bg-white p-2 pr-0 backdrop-saturate-200 transition-all data-[state=hidden]:-left-60"
        data-state={isSidebarOpened ? "opened" : "hidden"}
      >
        <div className="mb-2 mr-2 flex h-12 select-none items-center rounded-lg px-2 hover:bg-gray-100">
          <img src={appLogo} alt="" height={30} width={30} className="mr-2" />
          <span className="text-lg font-semibold">AllmaGen</span>
        </div>

        <button className="mb-4 mr-2 flex h-10 items-center gap-2 rounded-lg px-2 font-semibold hover:bg-gray-100">
          <div className="flex h-7 w-7 items-center justify-center">
            <PencilSquareIcon
              width={24}
              height={24}
              aria-hidden="true"
            ></PencilSquareIcon>
          </div>

          <span>Create new</span>
        </button>

        <div className="max-w-full flex-1 overflow-auto">
          {(chatsList || []).map((chat) => {
            return (
              <div
                className="mb-1 max-w-[calc(100%-1rem)] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-2 py-1 hover:bg-slate-100"
                onClick={() => dispatch(setActiveChatId(chat.id))}
                key={chat.id}
              >
                {chat.title}
              </div>
            );
          })}
          {/* <div className="kek">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            impedit exercitationem, dignissimos quibusdam necessitatibus
            officiis asperiores. Vero, nemo molestiae harum id ratione iste
            totam tempora soluta saepe eum aut velit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime impedit exercitationem,
            dignissimos quibusdam necessitatibus officiis asperiores. Vero, nemo
            molestiae harum id ratione iste totam tempora soluta saepe eum aut
            velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime impedit exercitationem, dignissimos quibusdam necessitatibus
            officiis asperiores. Vero, nemo molestiae harum id ratione iste
            totam tempora soluta saepe eum aut velit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime impedit exercitationem,
            dignissimos quibusdam necessitatibus officiis asperiores. Vero, nemo
            molestiae harum id ratione iste totam tempora soluta saepe eum aut
            velit!
          </div> */}
        </div>

        <Account />
      </nav>
    </>
  );
}

export default Sidebar;
