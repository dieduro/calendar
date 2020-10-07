import React, { useState } from "react";
import Day from "./Day";
import "../App.css";

const Month = ({ data }) => {
  const days = [];
  for (let i = 0; i < data.days; i++) {
    days.push(<Day key={i} date={i} />);
  }

  return (
    <div className="">
      <h2>{data.month}</h2>
      {days.map((day) => {
        return day;
      })}
    </div>
  );
};

export default Month;
