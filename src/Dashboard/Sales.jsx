import React, { useState, useContext } from "react";
import Chart from "react-apexcharts";
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
import { FarmContext } from "../context/FarmContext";

const Sales = () => {
  const [pageSize, setPageSize] = useState(5);
  const { sales } = useContext(FarmContext);

  const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);

  const columns = [
    { header: "Date", accessorKey: "date" },
    { header: "Batch", accessorKey: "batch" },
    { header: "Quantity", accessorKey: "quantity" },
    { header: "Price (per unit)", accessorKey: "price" },
    { header: "Total", accessorKey: "total" },
  ];

  const table = useReactTable({
    data: sales,
    columns,
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const chartData = {
    series: [{ name: "Sales Revenue", data: sales.map((sale) => sale.total) }],
    options: {
      chart: { type: "bar", height: 350 },
      xaxis: { categories: sales.map((sale) => sale.batch) },
      colors: ["#007bff"],
    },
  };

  return (
    <section className=" px-4 px-md-5 py-4 ">
      <div className="row gap-3 gap-md-4 align-items-center justify-content-center d-flex text-center mb-4">
        <div className=" bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
          <h5 className="fw-medium">Total Sales Revenue</h5>
          <h2 className="primary-color">${totalSales}</h2>
        </div>
      </div>

      <div className="row align-items-center justify-content-center d-flex text-center mb-4">
        <div className="bg-white rounded p-4 py-5 row">
          <h5 className="card-title">Sales Revenue by Batch</h5>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </div>
      </div>

      <div className="row align-items-center justify-content-center d-flex text-center mb-4">
        <div className="bg-white rounded p-4 py-5 row">
          <h5 className="fw-medium mb-3">Sales Transactions</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
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
                sales.length
              )}
              of {sales.length}
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
      </div>
    </section>
  );
};

export default Sales;
