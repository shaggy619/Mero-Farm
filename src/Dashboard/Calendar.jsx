import React, { useState } from "react";
import CustomCalendar from "./CustomCalendar";

const Calendar = () => {
  const [events, setEvents] = useState([
    { date: "2025-01-20", title: "Vaccination A" },
    { date: "2025-01-25", title: "Vaccination B" },
  ]);

  const handleDateClick = (date) => {
    const title = prompt("Enter vaccination details:");
    if (title) {
      setEvents([...events, { date: date.toISOString().split("T")[0], title }]);
    }
  };

  const handleDeleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event !== eventToDelete)); // Remove the event
  };

  return (
    <div className="container py-4">
      <div className="fw-medium fs-4 text-center pb-3">
        {" "}
        Schedule Vaccination and Medicine
      </div>
      <CustomCalendar
        events={events}
        onDateClick={handleDateClick}
        onDeleteEvent={handleDeleteEvent} // Pass the delete handler
      />
    </div>
  );
};

export default Calendar;
