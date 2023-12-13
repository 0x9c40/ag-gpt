import Layouted from "./Layouted";

export default function Dashboard() {
  return (
    <Layouted
      className={"pointer-events-none absolute bottom-0 left-0 right-0 top-0"}
      reverse={true}
    >
      <div className="pointer-events-auto">Dashboard</div>
    </Layouted>
  );
}
