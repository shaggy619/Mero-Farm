// CustomCalendar.jsx
import React, { useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CustomCalendar = ({ events = [], onDateClick, onDeleteEvent }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  const startOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const startOfWeek = (date) => {
    const diff = date.getDay();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - diff);
  };

  const generateCalendarDays = (date) => {
    const start = startOfWeek(startOfMonth(date));
    const end = endOfMonth(date);
    const dayList = [];
    let current = new Date(start);

    while (current <= end || current.getDay() !== 0) {
      dayList.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    setDays(dayList);
  };

  useEffect(() => {
    generateCalendarDays(currentDate);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const renderEvent = (date) => {
    const event = events.find(
      (e) => new Date(e.date).toDateString() === date.toDateString()
    );

    if (!event) return null;

    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{event.title}</Tooltip>}
      >
        <div className="event-info" onClick={(e) => e.stopPropagation()}>
          <span>{event.title}</span>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteEvent(event);
            }}
          >
            &#10005;
          </button>
        </div>
      </OverlayTrigger>
    );
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-btn" onClick={handlePrevMonth}>
          &lt;
        </button>
        <div className="fw-medium fs-5 ">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <button className="nav-btn" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div className="calendar-day-header" key={day}>
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              day.getMonth() === currentDate.getMonth()
                ? "current-month"
                : "other-month"
            } ${isPastDate(day) ? "disabled" : ""}`}
            onClick={() => {
              if (!isPastDate(day)) {
                const fixedDate = new Date(day);
                fixedDate.setHours(12, 0, 0, 0);
                onDateClick(fixedDate);
              }
            }}
            style={{
              cursor: isPastDate(day) ? "not-allowed" : "pointer",
              color: isPastDate(day) ? "#888" : "#000",
            }}
          >
            <div className="day-number">{day.getDate()}</div>
            {renderEvent(day)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;
