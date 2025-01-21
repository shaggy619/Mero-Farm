import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FarmTable from "../components/FarmTable";

const Farm = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    { id: 1, batch: "Batch 1", date: "2024-01-01", days: 28, total: 500 },
    { id: 2, batch: "Batch 2", date: "2024-02-01", days: 30, total: 600 },
    { id: 3, batch: "Batch 3", date: "2024-03-01", days: 31, total: 550 },
    { id: 4, batch: "Batch 4", date: "2024-04-01", days: 29, total: 500 },
    { id: 5, batch: "Batch 5", date: "2024-05-01", days: 30, total: 600 },
    { id: 6, batch: "Batch 6", date: "2024-06-01", days: 31, total: 550 },
    { id: 7, batch: "Batch 7", date: "2024-07-01", days: 29, total: 500 },
    { id: 8, batch: "Batch 8", date: "2024-08-01", days: 30, total: 600 },
    { id: 9, batch: "Batch 9", date: "2024-09-01", days: 31, total: 550 },
    { id: 10, batch: "Batch 10", date: "2024-10-01", days: 29, total: 500 },
    { id: 11, batch: "Batch 11", date: "2024-11-01", days: 30, total: 600 },
    { id: 12, batch: "Batch 12", date: "2024-12-01", days: 31, total: 550 },
  ]);
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
      id: data.length + 1,
      batch: `Batch ${data.length + 1}`,
      date: formData.date,
      days: daysDiff,
      price: parseInt(formData.price, 10),
      total: parseInt(formData.birds, 10),
    };
    setData([...data, newBatch]);
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

      <FarmTable data={data} setData={setData} />
    </div>
  );
};

export default Farm;
