import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {
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
import { FarmContext } from "../context/FarmContext";

const FarmTable = () => {
  const { batches, updateBatch, deleteBatch } = useContext(FarmContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [editReason, setEditReason] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // Handle Edit
  const handleEdit = (rowData) => {
    setSelectedRow(rowData);
    setEditReason("");
    setQuantity("");
    setPrice("");
    setShowModal(true);
  };

  // Handle Save Changes
  const handleSaveChanges = () => {
    if (selectedRow && editReason && quantity) {
      updateBatch(
        selectedRow.id,
        Number(quantity),
        editReason,
        price ? Number(price) : 0
      );
      setShowModal(false);
    }
  };

  // Handle Delete
  const handleDelete = (rowData) => {
    deleteBatch(rowData.id);
  };

  // Handle Modal Close
  const handleClose = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  // Column configuration
  const columns = [
    { header: "SN", accessorKey: "id" },
    { header: "Batch", accessorKey: "batch" },
    { header: "Date", accessorKey: "date" },
    { header: "Days", accessorKey: "days" },
    { header: "Total Birds", accessorKey: "total" },
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

  const table = useReactTable({
    data: batches,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-3 row">
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
      <div className="d-flex justify-content-end gap-3 align-items-center mb-3">
        <div>
          <span className="d-none d-md-inline">Rows per page:</span>
          <select
            className="ms-2"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="d-none d-md-flex">
          {table.getState().pagination.pageIndex * pageSize + 1}-
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * pageSize,
            batches.length
          )}
          of {batches.length}
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

      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRow && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Reason for Update</Form.Label>
                <Form.Select
                  value={editReason}
                  onChange={(e) => setEditReason(e.target.value)}
                >
                  <option value="">Select Reason</option>
                  <option value="sold">Sold</option>
                  <option value="mortality">Mortality</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>
              {editReason === "sold" && (
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
              )}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FarmTable;
