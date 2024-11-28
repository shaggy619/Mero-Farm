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
    batch: "Jan0124",
    days: 28,
    type: "local",
    total: 500,
    hen: 250,
    roaster: 250,
  },
  {
    id: 2,
    batch: "Feb0224",
    days: 30,
    type: "layers",
    total: 600,
    hen: 300,
    roaster: 300,
  },
  {
    id: 3,
    batch: "Mar0324",
    days: 31,
    type: "boiler",
    total: 550,
    hen: 275,
    roaster: 275,
  },
  {
    id: 4,
    batch: "Apr0424",
    days: 30,
    type: "local",
    total: 480,
    hen: 240,
    roaster: 240,
  },
  {
    id: 5,
    batch: "May0524",
    days: 31,
    type: "boiler",
    total: 650,
    hen: 325,
    roaster: 325,
  },
  {
    id: 6,
    batch: "Jun0624",
    days: 30,
    type: "local",
    total: 500,
    hen: 250,
    roaster: 250,
  },
  {
    id: 7,
    batch: "Jul0724",
    days: 31,
    type: "layers",
    total: 700,
    hen: 350,
    roaster: 350,
  },
  {
    id: 8,
    batch: "Aug0824",
    days: 31,
    type: "local",
    total: 550,
    hen: 275,
    roaster: 275,
  },
  //   {
  //     id: 9,
  //     batch: "Sep0924",
  //     days: 30,
  //     type: "layers",
  //     total: 530,
  //     hen: 265,
  //     roaster: 265,
  //   },
  //   {
  //     id: 10,
  //     batch: "Oct1024",
  //     days: 31,
  //     type: "local",
  //     total: 600,
  //     hen: 300,
  //     roaster: 300,
  //   },
  //   {
  //     id: 11,
  //     batch: "Nov1124",
  //     days: 30,
  //     type: "boiler",
  //     total: 520,
  //     hen: 260,
  //     roaster: 260,
  //   },
  //   {
  //     id: 12,
  //     batch: "Dec1224",
  //     days: 31,
  //     type: "local",
  //     total: 650,
  //     hen: 325,
  //     roaster: 325,
  //   },
  //   {
  //     id: 13,
  //     batch: "Jan1324",
  //     days: 31,
  //     type: "layers",
  //     total: 600,
  //     hen: 300,
  //     roaster: 300,
  //   },
  //   {
  //     id: 14,
  //     batch: "Feb1424",
  //     days: 28,
  //     type: "local",
  //     total: 550,
  //     hen: 275,
  //     roaster: 275,
  //   },
  //   {
  //     id: 15,
  //     batch: "Mar1524",
  //     days: 30,
  //     type: "local",
  //     total: 480,
  //     hen: 240,
  //     roaster: 240,
  //   },
];

// Column configuration
const columns = [
  { header: "SN", accessorKey: "id" },
  { header: "Batch", accessorKey: "batch" },
  { header: "Days", accessorKey: "days" },
  { header: "Type", accessorKey: "type" },
  { header: "Total Birds", accessorKey: "total" },
  { header: "Roaster", accessorKey: "roaster" },
  { header: "Hen", accessorKey: "hen" },
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
const FarmTable = () => {
  // Initialize the table instance using `useReactTable`
  const table = useReactTable({
    data,
    columns,
  });

  return (
    <div className="mx-2 mt-3">
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

export default FarmTable;
