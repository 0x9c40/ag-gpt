import { ReactNode } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import type { RootState } from "../store";

interface LayoutedProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}

export default function Layouted({
  children,
  className,
  reverse = false,
}: LayoutedProps) {
  const isDashboardOpened = useSelector(
    (state: RootState) => state.layout.isDashboardOpened,
  );

  return isDashboardOpened ? (
    <div
      className={classNames(
        "flex justify-center overflow-hidden @container",
        className,
      )}
    >
      <div className="hidden w-full @7xl:flex @7xl:max-w-xl">
        {reverse ? null : children}
      </div>

      <div className="w-full max-w-3xl flex-1 @7xl:max-w-xl">
        {reverse ? children : null}
      </div>
    </div>
  ) : (
    <div
      className={classNames("flex justify-center overflow-hidden", className)}
    >
      <div className="flex w-full max-w-3xl">{reverse ? null : children}</div>
    </div>
  );
}
