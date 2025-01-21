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

// Table component
const FeedTable = ({ data, setData }) => {
  const [pageSize, setPageSize] = useState(10);
  // Handle Edit
  const handleEdit = (rowData) => {
    const updatedData = data.filter((item) => item.id !== rowData.id);
    setData(updatedData);
  };

  // Handle Delete
  const handleDelete = (rowData) => {
    const updatedData = data.filter((item) => item.id !== rowData.id);
    setData(updatedData);
  };

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
            Finish
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
