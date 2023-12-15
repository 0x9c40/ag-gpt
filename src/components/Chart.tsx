import Chart from "react-apexcharts";

interface ChartProps {
  id: string;
  chartData: {
    type: "donut"; // only donut for now
    series: number[];
  };
}

export default function AppChart({ chartData }: ChartProps) {
  return (
    <div className="mb-4 w-full @container/chart">
      <div className="w-full @md/chart:w-2/3">
        {
          {
            donut: (
              <Chart
                options={{
                  colors: [
                    "#6C69E3",
                    "#E499FE",
                    "#7DD1CE",
                    "#E29493",
                    "#AFD5D7",
                  ],
                  chart: {
                    animations: {
                      enabled: false,
                    },
                  },
                  tooltip: {
                    enabled: false,
                  },
                }}
                series={chartData.series || []}
                type="donut"
              />
            ),
            // TODO: add other types of charts here
          }[chartData.type]
        }
      </div>
    </div>
  );
}
