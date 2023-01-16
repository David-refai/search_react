import React from "react";
import { useParams } from "react-router-dom";

const EventsDetails = ({events}) => {
  const { id } = useParams();
  return (
    <div className="events__details">
      { events && events.filter((event) => event._id === id).map((event) => (
        <div className="eventsCard__details" key={event._id}>
            <img className="eventsCard__details__img" src={event.image} alt={event.name} />
            <h3 className="eventsCard__details__title">{event.name}</h3>
            <p className=".eventsCard__details__description">{event.description}</p>
            <p>{event.event_dates}</p>
        </div>
      ))}

    </div>
  );
};

export default EventsDetails;
