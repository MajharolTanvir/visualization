import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useChartData from "../../../../Hooks/useChartData";

const LineChartData = () => {
  const [chartData] = useChartData();
  const america = chartData?.filter(
    (c) => c.country === "United States of America"
  );
  const oils = america?.filter((a) => a.topic === "oil");
  const oil = oils?.splice(10, 20)?.map((o) => o);
  return (
    <div className="mt-40">
      <h5 className="text-xl text-center text-teal-500 font-bold mb-5">
        Country: United States of America - Oil graph
      </h5>
      <LineChart
        width={1100}
        height={300}
        data={oil}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="likelihood" stroke="#8884d8" />
        <Line type="monotone" dataKey="intensity" stroke="#b366ba" />
        <Line type="natural" dataKey="relevance" stroke="#db42ab" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
        <XAxis dataKey="pestle" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default LineChartData;
