import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
  isSidebarOpened: boolean;
}

function Sidebar({ isSidebarOpened, children }: SidebarProps) {
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
        className="absolute left-0 z-10 h-full w-60 border-r-2 border-r-zinc-200 backdrop-blur-3xl backdrop-grayscale backdrop-saturate-50 transition-all data-[state=hidden]:-left-60"
        data-state={isSidebarOpened ? "opened" : "hidden"}
      >
        <img src="./AllmaGen_Main_Logo.png" alt="" />

        {children}
      </nav>
    </>
  );
}

export default Sidebar;
