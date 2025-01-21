import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EmployeeTable from "../components/EmployeesTable";

const Employees = () => {
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Manager",
      password: "manager123",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Supervisor",
      password: "supervisor456",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Worker",
      password: "worker789",
    },
    {
      id: 4,
      name: "Bob Williams",
      email: "bob.williams@example.com",
      role: "Worker",
      password: "worker012",
    },
  ]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  // Modal controls
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  // Save employee and close modal
  const handleSave = () => {
    setEmployees((prev) => [...prev, { id: prev.length + 1, ...newEmployee }]);
    setNewEmployee({ name: "", email: "", role: "", password: "" });
    handleClose();
  };

  return (
    <section className=" pb-4 px-4 px-md-5">
      <div className="row">
        <Button
          variant="primary"
          onClick={handleShow}
          className="btn primary-background text-white col-12 col-md-4 col-lg-2 py-2 mt-4 mb-2"
        >
          Add Employee
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="name" className="col-form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role" className="col-form-label">
                  Role:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  name="role"
                  value={newEmployee.role}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={newEmployee.password}
                  onChange={handleChange}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Employee
            </Button>
          </Modal.Footer>
        </Modal>
        <EmployeeTable employees={employees} setEmployees={setEmployees} />
      </div>
    </section>
  );
};

export default Employees;
