import React, { useState } from "react";
import FarmTable from "../components/FarmTable";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Farm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="row mx-4 mt-3 align-items-center justify-content-between gap-3">
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
          <form>
            <div className="form-group">
              <label htmlFor="no-of-birds" className="col-form-label">
                No. of birds:
              </label>
              <input type="text" className="form-control" id="no-of-birds" />
            </div>
            <div className="form-group">
              <label htmlFor="male" className="col-form-label">
                Male:
              </label>
              <input type="text" className="form-control" id="male" />
            </div>
            <div className="form-group">
              <label htmlFor="female" className="col-form-label">
                Female:
              </label>
              <input type="text" className="form-control" id="female" />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="col-form-label">
                Added Date:
              </label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="form-group">
              <label htmlFor="type" className="col-form-label">
                Type:
              </label>
              <input type="text" className="form-control" id="type" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <FarmTable />
    </div>
  );
};

export default Farm;
