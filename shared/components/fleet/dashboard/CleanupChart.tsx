import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CleanupChart = ({ data }: any) => {
  const [months, setMonths] = useState<string[]>([]);
  const [values, setValues] = useState<any[]>([]);
  console.log(data);
  useEffect(() => {
    setMonths([...Object.keys(data)]);
    setValues([...Object.values(data)]);
  }, []);

  const options = {
    colors: ["#009a06", "#FBBC0B", "#0B1B2B"],
    legend: {
      show: true,
      showAlways: true,
    },
    stroke: {
      width: 1,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        align: 'right',
        formatter: function (val) {
          return val.toFixed(0);
        }
      },
      title: {
        text: "Number of Houses"
      }
    },
    xaxis: {
      categories: months,
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
  } as ApexCharts.ApexOptions;
  const series = [
    {
      name: "Residence",
      data: values,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center border-b pb-2">
        <p className="fw-600 lg:fs-700 ">Monthly Waste Disposals</p>
        <select className="p-2 border border-gray-500 rounded-lg">
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
      <div className="mt-8">
        {typeof window !== "undefined" && !!values.length && (
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="400px"
          />
        )}
      </div>
    </>
  );
};

export default CleanupChart;
