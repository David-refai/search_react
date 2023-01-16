import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const data = [
  { date: "2023-01-15", name: "John" },
  { date: "2021-01-15", name: "Jane" },
  { date: "2021-02-01", name: "Bob" },
  { date: "2021-03-01", name: "Sara" },
];

function DateRangeFilter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState(data);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate ?? new Date());
    setEndDate(endDate ?? new Date());
    setFilteredData(
      data.filter(
        (item) =>
          new Date(item.date).getTime() >=
            (startDate ?? new Date()).getTime() &&
          new Date(item.date).getTime() <= (endDate ?? new Date()).getTime()
      )
    );
  };

  // const handleDatesChange = ({ startDate, endDate }) => {
  //     setStartDate(startDate);
  //     setEndDate(endDate);
  //     setFilteredData(data.filter(item => {
  //         let date = new Date(item.date)
  //         return date >= startDate && date <= endDate;
  //     }));
  // };

  return (
    <div>
      <DateRangePicker
        ranges={[{ startDate, endDate }]}
        onChange={handleDatesChange}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.date}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DateRangeFilter;
