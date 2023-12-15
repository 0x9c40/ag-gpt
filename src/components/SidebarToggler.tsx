import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/index.ts";
import { hideSidebar, toggleSidebar } from "../store/slices/layout.ts";

export default function SidebarToggler() {
  const isSidebarOpened = useSelector(
    (state: RootState) => state.layout.isSidebarOpened,
  );
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 opacity-100 backdrop-blur transition-all data-[state=opened]:opacity-0 data-[state=opened]:max-md:left-60 md:top-1/2 data-[state=opened]:md:opacity-100"
        onClick={() => dispatch(toggleSidebar(!isSidebarOpened))}
        data-state={isSidebarOpened ? "opened" : "hidden"}
      >
        <div className="">
          {isSidebarOpened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          )}
        </div>
      </button>

      {isSidebarOpened && (
        <div
          className="absolute bottom-0 left-0 right-0 top-0 bg-white opacity-40 md:hidden"
          onClick={() => dispatch(hideSidebar())}
        ></div>
      )}
    </>
  );
}
