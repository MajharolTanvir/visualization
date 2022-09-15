import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChartData from "../../../../Hooks/useChartData";

const BarChartData = () => {
  const [chartData] = useChartData();
  const america = chartData?.filter(
    (c) => c.country === "United States of America"
  );
  const exports = america?.filter((ex) => ex.topic === "oil");
  const exportData = exports?.splice(10, 20)?.map((e) => e);
  return (
    <div>
      <h5 className="text-xl">
        Country: United States of America - Export graph
      </h5>
        <BarChart width={1100} height={350} data={exportData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pestle" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" fill="#8884d8" />
          <Bar dataKey="likelihood" fill="#82ca9d" />
          <Bar dataKey="relevance" fill="#9e4fe3" />
        </BarChart>
    </div>
  );
};

export default BarChartData;
