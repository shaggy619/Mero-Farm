import React, { createContext, useState } from "react";

export const FarmContext = createContext();

const FarmProvider = ({ children }) => {
  const [batches, setBatches] = useState([
    {
      id: 1,
      batch: "Batch 1",
      date: "2024-01-01",
      days: 28,
      total: 500,
      sold: 0,
      mortality: 0,
    },
    {
      id: 2,
      batch: "Batch 2",
      date: "2024-02-01",
      days: 30,
      total: 600,
      sold: 0,
      mortality: 0,
    },
    {
      id: 3,
      batch: "Batch 3",
      date: "2024-03-01",
      days: 31,
      total: 700,
      sold: 0,
      mortality: 0,
    },
    {
      id: 4,
      batch: "Batch 4",
      date: "2024-04-01",
      days: 32,
      total: 800,
      sold: 0,
      mortality: 0,
    },
    {
      id: 5,
      batch: "Batch 5",
      date: "2024-05-01",
      days: 33,
      total: 900,
      sold: 0,
      mortality: 0,
    },
    {
      id: 6,
      batch: "Batch 6",
      date: "2024-06-01",
      days: 34,
      total: 1000,
      sold: 0,
      mortality: 0,
    },
    {
      id: 7,
      batch: "Batch 7",
      date: "2024-07-01",
      days: 35,
      total: 1100,
      sold: 0,
      mortality: 0,
    },
    {
      id: 8,
      batch: "Batch 8",
      date: "2024-08-01",
      days: 36,
      total: 1200,
      sold: 0,
      mortality: 0,
    },
    {
      id: 9,
      batch: "Batch 9",
      date: "2024-09-01",
      days: 37,
      total: 1300,
      sold: 0,
      mortality: 0,
    },
    {
      id: 10,
      batch: "Batch 10",
      date: "2024-10-01",
      days: 38,
      total: 1400,
      sold: 0,
      mortality: 0,
    },
    {
      id: 11,
      batch: "Batch 11",
      date: "2024-11-01",
      days: 39,
      total: 1500,
      sold: 0,
      mortality: 0,
    },
    {
      id: 12,
      batch: "Batch 12",
      date: "2024-12-01",
      days: 40,
      total: 1600,
      sold: 0,
      mortality: 0,
    },
  ]);

  const [sales, setSales] = useState([]);

  // Function to add a new batch
  const addBatch = (batch) => {
    setBatches([...batches, batch]);
  };

  // Function to update batch when birds are sold or there is mortality
  const updateBatch = (batchId, quantity, type, price = 0) => {
    setBatches((prevBatches) =>
      prevBatches.map((batch) =>
        batch.id === batchId
          ? {
              ...batch,
              total: batch.total - quantity,
              sold: type === "sold" ? batch.sold + quantity : batch.sold,
              mortality:
                type === "mortality"
                  ? batch.mortality + quantity
                  : batch.mortality,
            }
          : batch
      )
    );

    if (type === "sold") {
      const batch = batches.find((b) => b.id === batchId);
      setSales([
        ...sales,
        {
          date: new Date().toISOString().split("T")[0],
          batch: batch.batch,
          quantity,
          price,
          total: quantity * price,
        },
      ]);
    }
  };

  const deleteBatch = (id) => {
    setBatches((prevBatches) => prevBatches.filter((batch) => batch.id !== id));
  };

  return (
    <FarmContext.Provider
      value={{ batches, sales, addBatch, updateBatch, deleteBatch }}
    >
      {children}
    </FarmContext.Provider>
  );
};

export default FarmProvider;
