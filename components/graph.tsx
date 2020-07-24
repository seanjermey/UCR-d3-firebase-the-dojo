import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Data {
  date: string;
  distance: number;
}

interface GraphProps {
  data: Data[];
  dimensions?: {
    width: number;
    height: number;
  };
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

const Graph = ({
  data,
  dimensions = { width: 560, height: 400 },
  margin = { top: 40, right: 20, bottom: 50, left: 100 },
}: GraphProps) => {
  // define graph
  const graph = {
    width: dimensions.width - margin.left - margin.right,
    height: dimensions.height - margin.top - margin.bottom,
    ref: useRef(),
  };

  // define scales
  const scales = {
    x: d3.scaleTime().range([0, graph.width]),
    y: d3.scaleLinear().range([graph.height, 0]),
  };

  // define axis
  const axis = {
    x: { ref: useRef(), ticks: 4, format: d3.timeFormat(`%b %d`) },
    y: { ref: useRef(), ticks: 4, format: (d) => `${d}m` },
  };

  // define line
  const line = {
    ref: useRef(),
    d: d3
      .line<Data>()
      .x((d) => scales.x(new Date(d.date)))
      .y((d) => scales.y(d.distance)),
  };

  const guidelines = {
    ref: useRef(),
    plot: (ref, d) => {
      d3.select(ref)
        .append("line")
        .attr("x1", 0)
        .attr("y1", scales.y(d.distance))
        .attr("x2", scales.x(new Date(d.date)))
        .attr("y2", scales.y(d.distance))
        .attr("stroke", "#aaa")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", 4);

      d3.select(ref)
        .append("line")
        .attr("x1", scales.x(new Date(d.date)))
        .attr("y1", scales.y(d.distance))
        .attr("x2", scales.x(new Date(d.date)))
        .attr("y2", graph.height)
        .attr("stroke", "#aaa")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", 4);
    },
    remove: (ref) => {
      d3.select(ref).selectAll("line").remove();
    },
  };

  // define update function
  const update = (data) => {
    // sort data by date
    data.sort(
      (a: Data, b: Data) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // set scale domains
    scales.x.domain(d3.extent(data, (d: Data) => new Date(d.date)));
    scales.y.domain([0, d3.max(data, (d: Data) => d.distance)]);

    // set line
    d3.select(line.ref.current)
      .data([data])
      .attr("fill", "none")
      .attr("stroke", "#00bfa5")
      .attr("stroke-width", 2)
      .attr("d", line.d);

    // get circles
    const circles = d3.select(graph.ref.current).selectAll("circle").data(data);

    // set circles exit
    circles.exit().remove();

    // set circles update
    circles
      .attr("cx", (d: Data) => scales.x(new Date(d.date)))
      .attr("cy", (d: Data) => scales.y(d.distance));

    // set circles enter
    circles
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("cx", (d: Data) => scales.x(new Date(d.date)))
      .attr("cy", (d: Data) => scales.y(d.distance))
      .attr("fill", "#ccc");

    circles
      .on("mouseover", (d: Data, i, n) => {
        d3.select(n[i])
          .transition()
          .duration(100)
          .attr("r", 8)
          .attr("fill", "#fff");

        guidelines.plot(guidelines.ref.current, d);
      })
      .on("mouseleave", (d, i, n) => {
        d3.select(n[i])
          .transition()
          .duration(100)
          .attr("r", 4)
          .attr("fill", "#ccc");

        guidelines.remove(guidelines.ref.current);
      });

    // set axis
    d3.select(axis.x.ref.current)
      .call(
        d3.axisBottom(scales.x).ticks(axis.x.ticks).tickFormat(axis.x.format)
      )
      .selectAll("text")
      .attr("transform", "rotate(-40)")
      .attr("text-anchor", "end");
    d3.select(axis.y.ref.current).call(
      d3.axisLeft(scales.y).ticks(axis.y.ticks).tickFormat(axis.y.format)
    );
  };

  useEffect(() => {
    update(data);
  }, [data]);

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      className={`graph`}
    >
      <g
        ref={graph.ref}
        className={`graph-body`}
        width={graph.width}
        height={graph.height}
        transform={`translate(${margin.left}, ${margin.top})`}
      >
        <path ref={line.ref} />
        <g ref={guidelines.ref} />
      </g>
      <g
        ref={axis.x.ref}
        className={`graph-axis graph-axis-x`}
        transform={`translate(${margin.left}, ${graph.height + margin.top})`}
      />
      <g
        ref={axis.y.ref}
        className={`graph-axis graph-axis-y`}
        transform={`translate(${margin.left}, ${margin.top})`}
      />
    </svg>
  );
};

export default Graph;
