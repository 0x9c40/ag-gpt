import { PropsWithChildren } from "react";

type SidebarProps = PropsWithChildren<{ showSidebar: boolean }>;

function Sidebar({ showSidebar, children }: SidebarProps) {
  return (
    <>
      {/* the empty dummy element that takes a part in normal document flow*/}
      <div
        className="pattern-diagonal-lines pattern-green-500 pattern-bg-white hidden h-full w-60 transition-all data-[state=hidden]:w-0 md:block"
        data-state={showSidebar ? "opened" : "hidden"}
      ></div>

      {/* the real nav with absolute position to avoid problems with overflow */}
      <nav
        className="pattern-paper pattern-lime-500 absolute left-0 z-10 h-full w-60 transition-all data-[state=hidden]:-left-60"
        data-state={showSidebar ? "opened" : "hidden"}
      >
        {children}
      </nav>
    </>
  );
}

export default Sidebar;
