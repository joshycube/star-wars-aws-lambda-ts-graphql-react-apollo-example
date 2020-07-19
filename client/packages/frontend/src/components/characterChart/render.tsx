import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Character } from "@swweight/shared/types/Character";

interface Props {
  data: Character[];
}

function CharacterChartRender({ data }: Props) {
  return (
    <div>
      <BarChart
        width={750}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mass" fill="#8884d8" />
        <Bar dataKey="height" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default CharacterChartRender;
