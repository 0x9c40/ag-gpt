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
      .cornerRadius(10);

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

    // Add annotations
    const labelRadius = radius * 1.4;
    data_ready.forEach((d) => {
      const centroid = arcGenerator.centroid(d);
      const labelAngle = (d.startAngle + d.endAngle) / 2;
      const labelX = labelRadius * 0.8 * Math.sin(labelAngle);
      const labelY = -labelRadius * 0.8 * Math.cos(labelAngle);

      // Text annotation
      svg
        .append("text")
        .attr("x", labelX)
        .attr("y", labelY)
        .text(d.data.key)
        .style("text-anchor", "middle")
        .style("font-size", "14px");

      // Line from pie to annotation
      svg
        .append("line")
        .attr("x1", centroid[0] * 1.1)
        .attr("y1", centroid[1] * 1.1)
        .attr("x2", labelX)
        .attr("y2", labelY)
        .attr("stroke", "black")
        .attr("stroke-width", 1);
    });
  }, [data]);

  return <div ref={ref}></div>;
}

export default DoughnutChart;
