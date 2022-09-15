import { useEffect, useState } from "react";

const useChartData = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getChartData")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return [chartData];
};

export default useChartData;
