// import React from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
// import { useEffect, useState } from 'react';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

//   export const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   export const data = {
//     labels,
//     datasets: [
//       {
//         fill: true,
//         label: 'Dataset 2',
//         data: labels.map(() => Math.floor(Math.random() * 1000)),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

//   export function AreaChart() {
//     return <Line options={options} data={data} />;
//   }


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

interface ChartData {
  labels: number[];
  datasets: {
    fill: boolean;
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface DataPoint {
  label: number;
  price: number;
}

const initialChartData: ChartData = {
  labels: [],
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const AreaChart = () => {
  const [chartData, setChartData]: [ChartData, Dispatch<SetStateAction<ChartData>>] = useState(
    initialChartData
  );

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/report/');
      const responseData = response?.data?.data;
      console.log(responseData);
      

      if (!responseData) {
        console.error('Invalid response data');
        return;
      }

    
      const dataPoints : DataPoint[] = responseData.map((data: any) => {
        const timestamp = data.date;
        const dateObject = new Date(timestamp);
        const label = dateObject.getMonth() + 1;
  
        return {
          label,
          price: data.totalPrice,
        };
      });

      const labels = dataPoints.map((dataPoint) => dataPoint.label);
      const prices = dataPoints.map((dataPoint) => dataPoint.price);

      const newData: ChartData = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data: prices,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      setChartData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Line options={options} data={chartData} />;
};