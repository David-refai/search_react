import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import events from "./data/events.json";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventsDetails from "./components/eventsDetails";
import DateRangeFilter from "./components/date";
import Header from "./components/Header";


function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((event) => {
      return event.name.toLowerCase().includes(query);
    });
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };


    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    // const [filteredData, setFilteredData] = useState(events);
  
    // const handleDatesChange = ({ startDate, endDate }) => {
    //   setStartDate(startDate);
    //   setEndDate(endDate);
    //   setFilteredData(events.filter(item => 
    //     new Date(item.event_dates) >= startDate && new Date(item.event_dates) <= endDate
    //   ));
    // };
 

  return (
    <Router>
      <div className="container">
      <Header onChange={handleSearch}/>
        <Switch>
          <Route exact path="/">
            <Home events={search(events)}  />
        
          </Route>
          <Route path="/events/:id">
            <EventsDetails events ={events}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
