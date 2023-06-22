import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const MoneyInChart = () => {
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
      name: "Waste Bin",
      data: [5000, 20000, 15000, 11000, 6000, 40000, 15000, 11000,5000, 20000, 15000, 11000,],
    },
    {
        name: "Waste Bill",
        data: [3000, 10000, 40000, 15000, 6000, 10000, 40000, 15000, 3000, 10000, 40000, 18000,],
      },
      {
        name: "Special Request",
        data: [12000, 4000, 12000, 15000, 2000, 4000, 2000, 5000, 6000, 4000, 12000, 15000],
      },
  ];

  return (
    <>
    <div>
    <p className="fw-600 lg:fs-700 border-b pb-2">Money In</p>
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

export default MoneyInChart;