import React from "react";
import { Button } from "react-bootstrap";
import { useReactTable } from "@tanstack/react-table";

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
    addedDate: "2024/10/12",
    type: "B1",
    quantity: 1200,
  },

  {
    id: 2,
    addedDate: "2024/11/12",
    type: "B2",
    quantity: 1500,
  },

  {
    id: 3,
    addedDate: "2024/12/12",
    type: "Organic",
    quantity: 1500,
  },
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
  // Initialize the table instance using `useReactTable`
  const table = useReactTable({
    data,
    columns,
  });

  return (
    <div className=" mt-3">
      <div className="table-responsive ">
        <table className="table table-striped border shadow-sm">
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
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td
                    key={column.accessorKey || column.header}
                    className="px-4 py-3"
                  >
                    {column.cell
                      ? column.cell({ row })
                      : row[column.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedTable;
