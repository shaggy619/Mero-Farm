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
  {
    id: 1,
    batch: "Jan0124",
    days: 28,
    type: "local",
    total: 500,
  },
  {
    id: 2,
    batch: "Feb0224",
    days: 30,
    type: "layers",
    total: 600,
  },
  {
    id: 3,
    batch: "Mar0324",
    days: 31,
    type: "boiler",
    total: 550,
  },
  {
    id: 4,
    batch: "Apr0424",
    days: 30,
    type: "local",
    total: 480,
  },
  {
    id: 5,
    batch: "May0524",
    days: 31,
    type: "boiler",
    total: 650,
  },
  {
    id: 6,
    batch: "Jun0624",
    days: 30,
    type: "local",
    total: 500,
  },
  {
    id: 7,
    batch: "Jul0724",
    days: 31,
    type: "layers",
    total: 700,
  },

  {
    id: 8,
    batch: "Aug0824",
    days: 31,
    type: "local",
    total: 550,
  },
  {
    id: 9,
    batch: "Sep0924",
    days: 30,
    type: "layers",
    total: 530,
  },
  {
    id: 10,
    batch: "Oct1024",
    days: 31,
    type: "local",
    total: 600,
  },
  {
    id: 11,
    batch: "Nov1124",
    days: 30,
    type: "boiler",
    total: 520,
  },
  {
    id: 12,
    batch: "Dec1224",
    days: 31,
    type: "local",
    total: 650,
  },
];

// Column configuration
const columns = [
  { header: "SN", accessorKey: "id" },
  { header: "Batch", accessorKey: "batch" },
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

const FarmTable = () => {
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data,
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

      {/* Pagination Controls */}
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
            data.length
          )}
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

export default FarmTable;
