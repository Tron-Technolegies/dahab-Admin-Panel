import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../../../Loading";
import PaginationComponent from "../PaginationComponent";
import { useSelector } from "react-redux";
import useGetAllRevenue from "../../../../hooks/adminMining/useGetAllRevenue";
import useAddRevenue from "../../../../hooks/adminMining/useAddRevenue";

export default function S19KRevenueSection() {
  const [page, setPage] = useState(1);
  const { sats } = useSelector((state) => state.admin);
  const [hashRate, setHashRate] = useState(3840);
  const [upTime, setUptime] = useState(0.9);
  const { loading, refetch, totalPages, revenues } = useGetAllRevenue({
    currentPage: page,
    category: "S19KPro",
  });
  const { loading: addLoading, addRevenue } = useAddRevenue();

  function handlePageChange(event, value) {
    setPage(value);
  }

  async function handleAdd() {
    const amount = parseFloat(sats.toFixed(9)) * hashRate * upTime;
    await addRevenue({ amount: amount, hashRate, category: "S19KPro" });
    refetch();
  }
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };

  useEffect(() => {
    refetch();
  }, [page]);
  return (
    <div className="p-5">
      {/* <div className="flex flex-col gap-2 border-b border-homeBg pb-5">
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">Sats/Th/Day:</label>
          <input
            className="p-2 rounded-lg"
            type="number"
            disabled
            value={sats?.toFixed(9)}
          />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">
            Enter Total HashRate(TH/s):
          </label>
          <input
            className="p-2 rounded-lg"
            type="number"
            value={hashRate}
            onChange={(e) => setHashRate(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">Daily Uptime:</label>
          <input
            className="p-2 rounded-lg"
            type="number"
            disabled
            value={upTime}
          />
        </div>
        <button
          onClick={handleAdd}
          className="px-3 py-2 bg-homeBg text-white rounded-md w-fit ms-auto"
        >
          Submit
        </button>
        {addLoading && <Loading />}
      </div> */}
      <p className="text-lg my-5">Revenue History</p>
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {revenues?.map((x) => (
                <TableRow
                  key={x._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    <div>
                      <p>
                        {new Date(x.date).toLocaleDateString("en-Us", options)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.amount.toFixed(7)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div className="my-5">
        {totalPages > 1 && (
          <PaginationComponent
            page={page}
            totalPage={totalPages}
            pageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
