import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const CleanupChart = () => {
  const options = {
    colors: ["#009a06",'#FBBC0B', "#0B1B2B"],
    legend: {
      show: true,
    },
    stroke: {
      width: 1,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec",],
    },
    plotOptions: {
        bar: {
          columnWidth: '60%',
        },
      },
  };
  const series = [
    {
      name: "Residence",
      data: [50, 2, 15, 11, 6, 40, 15, 11,5, 20, 15, 11,],
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
        {typeof window !== "undefined" && (
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