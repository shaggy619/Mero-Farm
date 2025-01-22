import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {
  MdVisibility,
  MdVisibilityOff,
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from "react-icons/md";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

const EmployeeTable = ({ employees, setEmployees }) => {
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});

  // Handle toggle password visibility
  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle edit employee
  const handleEdit = (rowData) => {
    setEditData(rowData);
    setShowModal(true);
  };

  // Handle save changes
  const handleSave = () => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === editData.id ? editData : emp))
    );
    setShowModal(false);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle delete employee
  const handleDelete = (rowData) => {
    setEmployees((prev) =>
      prev.filter((employee) => employee.id !== rowData.id)
    );
  };

  // Column configuration
  const columns = [
    { header: "SN", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "Role", accessorKey: "role" },
    {
      header: "Password",
      accessorKey: "password",
      cell: ({ row }) => {
        const isVisible = visiblePasswords[row.original.id];
        return (
          <div className="d-flex align-items-center">
            <span className="me-2">
              {isVisible ? row.original.password : "●●●●●●●●"}
            </span>
            <Button
              variant="link"
              className="p-0"
              onClick={() => togglePasswordVisibility(row.original.id)}
            >
              {isVisible ? (
                <MdVisibilityOff size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </Button>
          </div>
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "action",
      cell: ({ row }) => (
        <div className="d-flex">
          <Button
            size="sm"
            className="me-2 primary-background"
            onClick={() => handleEdit(row.original)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(row.original)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Initialize the table instance using `useReactTable`
  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-3">
      <div className="table-responsive">
        <table className="table table-striped border">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessorKey}
                  className="fw-medium red-background text-white px-4 py-3"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td
                    key={column.accessorKey || column.header}
                    className="px-4 py-3"
                  >
                    {column.cell
                      ? column.cell({ row })
                      : row.getValue(column.accessorKey)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-end gap-3 align-items-center mt-3">
        <div>
          <span className="d-none d-md-inline">Rows per page:</span>
          <select
            className="ms-2"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="d-none d-md-flex">
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}
          -
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            employees.length
          )}{" "}
          of {employees.length}
        </div>

        <div>
          <Button
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <MdFirstPage size={20} />
          </Button>
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <MdNavigateBefore size={20} />
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <MdNavigateNext size={20} />
          </Button>
          <Button
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <MdLastPage size={20} />
          </Button>
        </div>
      </div>

      {/* Edit Employee Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editData.name || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editData.email || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={editData.password || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={editData.role || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeTable;
