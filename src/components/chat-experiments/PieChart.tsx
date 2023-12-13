import { useEffect, useRef } from "react";
import * as d3 from "d3";

function PieChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    // Set the dimensions and margins of the graph
    const width = 450;
    const height = 450;
    const margin = 40;

    // The radius of the pie chart is half the smallest side
    const radius = Math.min(width, height) / 2 - margin;

    // Append the svg object to the div
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Set the color scale
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.key))
      .range(d3.schemeCategory10);

    // Compute the position of each group on the pie
    const pie = d3.pie().value((d) => d.value);

    const data_ready = pie(data);

    // Shape helper to build arcs
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

    // Build the pie chart
    svg
      .selectAll("slices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.data.key))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);
  }, [data]); // Redraw chart if data changes

  return <div ref={ref}></div>;
}

export default PieChart;
