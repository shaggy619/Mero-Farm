import React, { useState } from "react";
import { Button } from "react-bootstrap";
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

// Handle Edit
const handleEdit = (rowData) => {
  console.log("Editing:", rowData);
};

// Handle Delete
const handleDelete = (rowData) => {
  console.log("Deleting:", rowData);
};

// Dummy data
const data = [
  { id: 1, addedDate: "2024/10/12", type: "B1", quantity: 1200 },
  { id: 2, addedDate: "2024/11/12", type: "B2", quantity: 1500 },
  { id: 3, addedDate: "2024/12/12", type: "Organic", quantity: 1500 },
  { id: 4, addedDate: "2025/01/12", type: "B3", quantity: 1300 },
  { id: 5, addedDate: "2025/02/12", type: "B4", quantity: 1400 },
  { id: 6, addedDate: "2024/10/15", type: "B1", quantity: 1100 },
  { id: 7, addedDate: "2024/11/10", type: "B2", quantity: 1600 },
  { id: 8, addedDate: "2024/12/05", type: "Organic", quantity: 1550 },
  { id: 9, addedDate: "2025/01/05", type: "B3", quantity: 1250 },
  { id: 10, addedDate: "2025/02/10", type: "B4", quantity: 1350 },
  { id: 11, addedDate: "2024/09/20", type: "B1", quantity: 1050 },
  { id: 12, addedDate: "2024/11/30", type: "B2", quantity: 1450 },
  { id: 13, addedDate: "2024/12/20", type: "Organic", quantity: 1600 },
  { id: 14, addedDate: "2025/01/25", type: "B3", quantity: 1200 },
  { id: 15, addedDate: "2025/02/05", type: "B4", quantity: 1550 },
  { id: 16, addedDate: "2024/10/25", type: "B1", quantity: 1000 },
  { id: 17, addedDate: "2024/11/05", type: "B2", quantity: 1700 },
  { id: 18, addedDate: "2024/12/10", type: "Organic", quantity: 1400 },
  { id: 19, addedDate: "2025/01/15", type: "B3", quantity: 1350 },
  { id: 20, addedDate: "2025/02/20", type: "B4", quantity: 1450 },
];

// Column configuration
const columns = [
  { header: "SN", accessorKey: "id" },
  { header: "Added Date", accessorKey: "addedDate" },
  { header: "Type", accessorKey: "type" },
  { header: "Quantity", accessorKey: "quantity" },
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

// Table component
const FeedTable = () => {
  const [pageSize, setPageSize] = useState(10);

  // Initialize the table instance using `useReactTable`
  const table = useReactTable({
    data,
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
            data.length
          )}{" "}
          of {data.length}
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
    </div>
  );
};

export default FeedTable;
