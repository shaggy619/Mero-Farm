import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FeedTable from "../components/FeedTable";

const Inventory = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    { id: 1, addedDate: "2024-10-12", type: "B1", quantity: 1200 },
    { id: 2, addedDate: "2024-11-12", type: "B2", quantity: 1500 },
    { id: 3, addedDate: "2024-12-12", type: "Organic", quantity: 1500 },
    { id: 4, addedDate: "2025-01-12", type: "B3", quantity: 1300 },
    { id: 5, addedDate: "2025-02-12", type: "B4", quantity: 1400 },
    { id: 6, addedDate: "2024-10-15", type: "B1", quantity: 1100 },
    { id: 7, addedDate: "2024-11-10", type: "B2", quantity: 1600 },
    { id: 8, addedDate: "2024-12-05", type: "Organic", quantity: 1550 },
    { id: 9, addedDate: "2025-01-05", type: "B3", quantity: 1250 },
    { id: 10, addedDate: "2025-02-10", type: "B4", quantity: 1350 },
    { id: 11, addedDate: "2024-09-20", type: "B1", quantity: 1050 },
    { id: 12, addedDate: "2024-11-30", type: "B2", quantity: 1450 },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    addedDate: "",
    type: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const newFeed = {
      id: data.length + 1,
      addedDate: formData.date,
      type: formData.type,
      quantity: formData.quantity,
    };
    setData([...data, newFeed]);
    setFormData({
      addedDate: "",
      type: "",
      quantity: "",
    });
    handleClose();
  };

  return (
    <section className="px-4 px-md-5 pb-4">
      <div className=" py-4">
        <div className="row gap-3 gap-md-4 align-items-center justify-content-center d-flex text-center">
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">3</h2>
            <div className="fw-medium">Type of Feed</div>
          </div>
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">1200</h2>
            <div className="fw-medium">B1</div>
          </div>
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">1500</h2>
            <div className="fw-medium">B2</div>
          </div>
          <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="primary-color">1500</h2>
            <div className="fw-medium">Organic</div>
          </div>
        </div>
        <div className="row ">
          <Button
            variant="primary"
            onClick={handleShow}
            className="btn primary-background text-white col-12 col-md-4 col-lg-2 py-2 me-2 mt-4 mb-1"
          >
            Add Feed
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Feed in the Inventory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="date" className="col-form-label">
                    Added Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                    value={formData.date}
                    className="form-control"
                    id="date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity" className="col-form-label">
                    Quantity in KG:
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="form-control"
                    id="quantity"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="feed-type" className="col-form-label">
                    Feed Type:
                  </label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="form-control"
                    id="feed-type"
                  />
                </div>
              </form>
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
          <div>
            <FeedTable data={data} setData={setData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
