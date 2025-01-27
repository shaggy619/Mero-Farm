import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FarmTable from "../components/FarmTable";
import { FarmContext } from "../context/FarmContext";

const Farm = () => {
  const [show, setShow] = useState(false);
  const { batches, addBatch } = useContext(FarmContext);
  const [formData, setFormData] = useState({
    batch: "",
    birds: "",
    price: "",
    date: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.birds || !formData.date) return;
    const batchDate = new Date(formData.date);
    const today = new Date();
    const timeDiff = today - batchDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const newBatch = {
      id: batches.length + 1,
      batch: `Batch ${batches.length + 1}`,
      date: formData.date,
      days: daysDiff,
      price: parseInt(formData.price, 10),
      total: parseInt(formData.birds, 10),
      sold: 0,
      mortality: 0,
    };
    addBatch(newBatch);
    setFormData({ birds: "", price: "", date: "", type: "local" });
    handleClose();
  };

  return (
    <div className="px-4 px-md-5 mt-3">
      <div className="row align-items-center justify-content-between gap-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control py-2 shadow-sm"
            placeholder="Search by Batch ID"
          />
        </div>
        <Button
          variant="primary"
          onClick={handleShow}
          className="btn primary-background text-white col-md-4 col-lg-2 py-2"
        >
          Add New Batch
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>No. of birds:</Form.Label>
              <Form.Control
                type="number"
                name="birds"
                value={formData.birds}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Added Date:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <FarmTable />
    </div>
  );
};

export default Farm;
