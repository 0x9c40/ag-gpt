import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function DoughnutChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    const width = 450;
    const height = 450;
    const margin = 40;

    const radius = Math.min(width, height) / 2 - margin;

    // Clear previous SVG to avoid overlap
    d3.select(ref.current).select("svg").remove();

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.key))
      .range(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.value);

    const data_ready = pie(data);

    const arcGenerator = d3
      .arc()
      .innerRadius(100)
      .outerRadius(radius)
      .cornerRadius(10); // This line rounds the corners of the arcs

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
  }, [data]);

  return <div ref={ref}></div>;
}

export default DoughnutChart;
