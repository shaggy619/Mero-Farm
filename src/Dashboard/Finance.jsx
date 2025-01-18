import React, { useState } from "react";
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

const Finance = () => {
  const [pageSize, setPageSize] = useState(5);
  const [transactions, setTransactions] = useState([
    {
      date: "2024-08-01",
      description: "Feed purchase",
      category: "Expense",
      amount: -200,
    },
    {
      date: "2024-08-05",
      description: "Chicken sales",
      category: "Income",
      amount: 500,
    },
    {
      date: "2024-08-10",
      description: "Medicine",
      category: "Expense",
      amount: -50,
    },
    {
      date: "2024-08-15",
      description: "Equipment repair",
      category: "Expense",
      amount: -100,
    },
    {
      date: "2024-08-20",
      description: "Additional sales",
      category: "Income",
      amount: 300,
    },
    {
      date: "2024-08-25",
      description: "Utilities",
      category: "Expense",
      amount: -150,
    },
  ]);

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const netProfit = totalIncome - totalExpenses;

  const chartData = {
    series: [
      { name: "Income", data: [300, 500, 600, 800, 1000] },
      { name: "Expenses", data: [200, 250, 400, 300, 500] },
    ],
    options: {
      chart: { type: "line", height: 350 },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
      stroke: { curve: "smooth" },
      markers: { size: 5 },
      colors: ["#28a745", "#dc3545"],
    },
  };

  const columns = [
    { header: "Date", accessorKey: "date" },
    { header: "Description", accessorKey: "description" },
    { header: "Category", accessorKey: "category" },
    { header: "Amount", accessorKey: "amount" },
  ];

  const table = useReactTable({
    data: transactions,
    columns,
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <section className="px-4 px-md-5 py-4">
      <div className="row gap-3 gap-md-4 align-items-center justify-content-center d-flex text-center pb-4">
        <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
          <h5 className="fw-medium">Total Income</h5>
          <h2 className="primary-color">${totalIncome}</h2>
        </div>
        <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
          <h5 className="fw-medium">Total Expenses</h5>
          <h2 className="primary-color">${totalExpenses}</h2>
        </div>
        <div className="col-12 col-md bg-white rounded p-4 py-5 d-flex flex-column align-items-center justify-content-center">
          <h5 className="fw-medium">Net Profit</h5>
          <h2 className="primary-color">${netProfit}</h2>
        </div>
      </div>

      <div className="row align-items-center justify-content-center d-flex text-center mb-4">
        <div className="bg-white rounded p-4 py-5 row">
          <h5 className="fw-medium">Income vs Expenses</h5>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="row align-items-center justify-content-center d-flex text-center mb-4">
        <div className="bg-white rounded p-4 py-5 row">
          <h5 className="fw-medium mb-3">Transactions</h5>
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
                        key={column.accessorKey}
                        className={
                          column.accessorKey === "amount"
                            ? row.original.amount > 0
                              ? "text-success"
                              : "text-danger"
                            : "px-4 py-3"
                        }
                      >
                        {row.getValue(column.accessorKey)}
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
                transactions.length
              )}
              of {transactions.length}
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

export default Finance;
