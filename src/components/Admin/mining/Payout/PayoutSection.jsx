import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllPayouts from "../../../../hooks/adminMining/useGetAllPayouts";
import Loading from "../../../Loading";
import useUpdatePayoutStatus from "../../../../hooks/adminMining/useUpdatePayoutStatus";
import PaginationComponent from "../PaginationComponent";

export default function PayoutSection() {
  const [page, setPage] = useState(1);
  const { loading, payouts, refetch, totalPages } = useGetAllPayouts({
    currentPage: page,
  });
  const { loading: updateLoading, updatePayout } = useUpdatePayoutStatus();
  const [statusMap, setStatusMap] = useState({});

  function handlePageChange(event, value) {
    setPage(value);
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
      <p className="text-lg font-semibold">All Payouts</p>
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
                  User
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Wallet
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Balance
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
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payouts?.map((x) => (
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
                    {new Date(x.date).toLocaleDateString("en-US", options)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.user?.username}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.walletAddress}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.user?.currentBalance.toFixed(8)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.amount.toFixed(8)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    <div className="flex gap-2 items-center">
                      <select
                        className="bg-homeBg px-3 py-2 rounded-md text-white disabled:cursor-not-allowed"
                        value={statusMap[x._id] || x.status}
                        disabled={x.isUpdated}
                        onChange={(e) =>
                          setStatusMap({
                            ...statusMap,
                            [x._id]: e.target.value,
                          })
                        }
                      >
                        <option value={"Pending"}>Pending</option>
                        <option value={"Completed"}>Completed</option>
                        <option value={"Failed"}>Failed</option>
                      </select>
                      <button
                        disabled={x.isUpdated}
                        onClick={async () => {
                          const newStatus = statusMap[x._id];
                          if (!newStatus || newStatus === x.status) return;
                          await updatePayout({
                            id: x._id,
                            userId: x.user?._id,
                            status: newStatus,
                            amount: x.amount,
                          });
                          refetch();
                        }}
                        className="px-4 py-2 rounded-md bg-homeBg hover:bg-homeBgGradient text-white disabled:cursor-not-allowed"
                      >
                        Submit
                      </button>
                      {updateLoading && <Loading />}
                    </div>
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
            totalPage={totalPages}
            page={page}
            pageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
