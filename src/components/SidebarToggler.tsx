import { useSelector, useDispatch } from "react-redux";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import type { RootState } from "../store";

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
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          ) : (
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
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
