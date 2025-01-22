import React, { useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { Button, Modal, Form } from "react-bootstrap";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(""); // Track selected batch
  const [vaccinationDetails, setVaccinationDetails] = useState(""); // Track vaccination details
  const [events, setEvents] = useState([
    { date: "2025-01-25", title: "Batch 1 - Vaccination A" },
    { date: "2025-01-30", title: "Batch 2 - Vaccination B" },
  ]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    if (selectedDate && selectedBatch && vaccinationDetails.trim()) {
      const newEvent = {
        date: selectedDate.toISOString().split("T")[0], // Convert date to string
        title: `${selectedBatch} - ${vaccinationDetails}`,
      };
      setEvents([...events, newEvent]);
    }
    setShowModal(false);
    setSelectedBatch("");
    setVaccinationDetails("");
  };

  const handleDeleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event !== eventToDelete));
  };

  return (
    <div className="container py-4">
      <div className="fw-medium fs-4 text-center pb-3">
        Schedule Vaccination and Medicine
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Vaccination Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Batch:</Form.Label>
              <Form.Select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
              >
                <option value="">Select a batch</option>
                <option value="Batch 1">Batch 1</option>
                <option value="Batch 2">Batch 2</option>
                <option value="Batch 3">Batch 3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vaccination Details:</Form.Label>
              <Form.Control
                type="text"
                value={vaccinationDetails}
                onChange={(e) => setVaccinationDetails(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveChanges}
            disabled={!selectedBatch || !vaccinationDetails.trim()}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <CustomCalendar
        events={events}
        onDateClick={handleDateClick}
        onDeleteEvent={handleDeleteEvent}
      />
    </div>
  );
};

export default Calendar;
