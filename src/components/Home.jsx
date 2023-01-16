import React from "react";
import { Link } from "react-router-dom";


const Home = ({ events , filter }) => {
    // console.log(events);
  return (
   
    
    <div className="home">
      <div className="events">
        {events && events.map((event) => (
          <div className="eventsCard" key={event._id}>
            <img className="eventsCard__img" src={event.image} alt={event.name} />
            <Link to={`/events/${event._id}`}>
            <button className="eventsCard__btn">View Details</button></Link>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{event.event_dates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
