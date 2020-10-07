import React, { useState } from "react";
import calendarData from "../calendar-data";
import Month from "./Month";
import "../App.css";

const Calendar = () => {
  //const [value, onChange] = useState(new Date());

  return (
    <div className="">
      <h1>CALENDAR!</h1>
      {calendarData.map((month) => {
        return <Month key={month.id} data={month} />;
      })}
    </div>
  );
};

export default Calendar;
