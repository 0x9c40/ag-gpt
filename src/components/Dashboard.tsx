import { useDispatch } from "react-redux";
import Layouted from "./Layouted";
import { hideDashboard } from "../store/slices/layout";

export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <Layouted
      className={"pointer-events-none absolute bottom-0 left-0 right-0 top-0"}
      reverse={true}
    >
      <div
        className="pointer-events-auto my-4 max-h-[calc(100%-2rem)] min-h-[50%] overflow-auto rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        onClick={() => dispatch(hideDashboard())}
      >
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          expedita reiciendis ducimus culpa consequatur iusto reprehenderit quo
          nemo delectus ipsum aperiam cupiditate possimus, libero distinctio
          sit. Ipsum ex mollitia facilis. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Harum expedita reiciendis ducimus culpa
          consequatur iusto reprehenderit quo nemo delectus ipsum aperiam
          cupiditate possimus, libero distinctio sit. Ipsum ex mollitia facilis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          expedita reiciendis ducimus culpa consequatur iusto reprehenderit quo
          nemo delectus ipsum aperiam cupiditate possimus, libero distinctio
          sit. Ipsum ex mollitia facilis. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Harum expedita reiciendis ducimus culpa
          consequatur iusto reprehenderit quo nemo delectus ipsum aperiam
          cupiditate possimus, libero distinctio sit. Ipsum ex mollitia facilis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          expedita reiciendis ducimus culpa consequatur iusto reprehenderit quo
          nemo delectus ipsum aperiam cupiditate possimus, libero distinctio
          sit. Ipsum ex mollitia facilis. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Harum expedita reiciendis ducimus culpa
          consequatur iusto reprehenderit quo nemo delectus ipsum aperiam
          cupiditate possimus, libero distinctio sit. Ipsum ex mollitia facilis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          expedita reiciendis ducimus culpa consequatur iusto reprehenderit quo
          nemo delectus ipsum aperiam cupiditate possimus, libero distinctio
          sit. Ipsum ex mollitia facilis. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Harum expedita reiciendis ducimus culpa
          consequatur iusto reprehenderit quo nemo delectus ipsum aperiam
          cupiditate possimus, libero distinctio sit. Ipsum ex mollitia facilis.
        </div>
      </div>
    </Layouted>
  );
}
