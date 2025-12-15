import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationComponent from "../PaginationComponent";
import useGetAllUsers from "../../../../hooks/adminMining/useGetAllUsers";
import Loading from "../../../Loading";
import useUpdateWalletBalance from "../../../../hooks/adminMining/useUpdateWalletBalance";

export default function MiningUsersSection() {
  const [page, setPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [showEditBar, setShowEditBar] = useState("");
  const [amount, setAmount] = useState(0);
  const { loading, users, totalPages, refetch } = useGetAllUsers({
    currentPage: page,
    keyWord: keyWord,
  });
  const { loading: updateLoading, updateBalance } = useUpdateWalletBalance();

  function handlePageChange(event, value) {
    setPage(value);
  }

  useEffect(() => {
    refetch();
  }, [page]);
  return (
    <div className="p-5">
      <p className="text-lg font-semibold">All Users</p>
      <div className="flex md:gap-2 gap-1 items-center my-5">
        <input
          type="text"
          placeholder="search"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
          className="py-1 px-3 rounded-lg  border border-gray-300 text-gray-900 h-11"
        />
        <button
          className="py-3 px-3 bg-homeBg text-white rounded-full hover:bg-homeBgGradient nav-link"
          onClick={() => refetch()}
        >
          <FaSearch />
        </button>
      </div>
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
                  Username
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Current Balance (BTC)
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Wallet Balance (AED)
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((x) => (
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
                    {x.username}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.email}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.currentBalance.toFixed(8)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.walletBalance.toFixed(3)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    <div>
                      <button
                        className={`px-4 py-2 bg-homeBg hover:bg-homeBgGradient rounded-md text-white ${
                          x._id === currentId && showEditBar && "hidden"
                        }`}
                        onClick={() => {
                          setCurrentId(x._id);
                          setShowEditBar(true);
                        }}
                      >
                        Update Wallet
                      </button>
                      <div
                        className={`${
                          x._id === currentId && showEditBar
                            ? "flex gap-2"
                            : "hidden"
                        }`}
                      >
                        <input
                          type="number"
                          className="bg-gray-200 w-14 p-2 rounded-md"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        ></input>
                        <button
                          onClick={async () => {
                            await updateBalance({ amount, id: currentId });
                            refetch();
                            setAmount(0);
                            setCurrentId("");
                            setShowEditBar(false);
                          }}
                          className="px-4 py-2 bg-homeBg hover:bg-homeBgGradient rounded-md text-white "
                        >
                          Update
                        </button>
                        {updateLoading && <Loading />}
                      </div>
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
