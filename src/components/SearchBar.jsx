import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import events from "../data/events.json";

function SearchBar({ onChange }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
    const [filteredData, setFilteredData] = useState(events);

    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
        setFilteredData(events.filter(item =>
            new Date(item.event_dates) >= startDate && new Date(item.event_dates) <= endDate
        ));
    };
    


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const showAndHide = () => {
    document.querySelector(".searchItem_Calender").classList.add("active");
    document.querySelector(".search__input").classList.remove("active");
    setOpenDate(!openDate);
  };

  const addActive = () => {
   document.querySelector(".search__input").classList.add("active");
    document.querySelector(".searchItem_Calender").classList.remove("active");


    if (openDate === true) {
      setOpenDate(false);
    }

  };

  let searchItem = null;
  if (1) {
    searchItem = (
      <>
        <div className="searchItem">
          <div className="searchItem_search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="searchIcon_search"
            />
          </div>
          <input
            className="search__input"
            type="text"
            placeholder="Search "
            onChange={onChange}
            onClick={addActive}
          />
        </div>
        <div className="span_1">
          <span className="span_2">|</span>
        </div>

        <div className="searchItem_Calender" onClick={showAndHide}>
          <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />

          <span className="searchText">
            {format(startDate, "yyyy/MM/dd")} → {format(endDate, "yyyy/MM/dd")}

          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              months={2}
              direction="horizontal"
              onChange={handleSelect}
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              moveRangeOnFirstSelection={false}
              className="date"
            />
          )}

          {/* <Home events={filteredItems} /> */}
        </div>
        <ul>
          {/* {filteredData.map((item) => (
            <li key={item.date}>{item.name}</li>
          ))} */}
        </ul>
      </>
    );
  }

  return <div className="searchBar">{searchItem}</div>;
}

export default SearchBar;
