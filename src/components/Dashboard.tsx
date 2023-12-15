import { useDispatch } from "react-redux";

import { hideDashboard } from "../store/slices/layout";

import Layouted from "./Layouted";

export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <Layouted
      className="pointer-events-none absolute bottom-0 left-0 right-0 top-0"
      reverse={true}
    >
      <div
        className="pointer-events-auto my-4 max-h-[calc(100%-2rem)] min-h-[50%] overflow-auto rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        onClick={() => dispatch(hideDashboard())}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          recusandae facilis, ut rem quis eligendi. Consectetur doloremque harum
          assumenda, dolorum labore error sint minima? Placeat aliquam
          reprehenderit natus nostrum incidunt!
        </div>
      </div>
    </Layouted>
  );
}
