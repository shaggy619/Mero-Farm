import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FeedTable from "../components/FeedTable";

const Inventory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <input type="date" className="form-control" id="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity" className="col-form-label">
                    Quantity in KG:
                  </label>
                  <input type="text" className="form-control" id="quantity" />
                </div>
                <div className="form-group">
                  <label htmlFor="feed-type" className="col-form-label">
                    Feed Type:
                  </label>
                  <input type="text" className="form-control" id="feed-type" />
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
          <div>
            <FeedTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
