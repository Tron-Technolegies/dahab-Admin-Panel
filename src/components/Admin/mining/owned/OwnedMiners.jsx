import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetOwnedMiners } from "../../../../hooks/adminMining/useGetOwnedMiners";
import Loading from "../../../Loading";
import PaginationComponent from "../PaginationComponent";

export default function OwnedMiners() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { isLoading, data } = useGetOwnedMiners({
    currentPage,
    query: debouncedQuery,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(handler);
  }, [query]);
  return (
    <div className="p-5">
      <p className="text-lg font-semibold">All Owned Miners</p>
      <div className="flex md:gap-2 gap-1 items-center my-5">
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="py-1 px-3 rounded-lg  border border-gray-300 text-gray-900 h-11"
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Username
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Miners Owned
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Payout Mode
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.users?.map((x) => (
                <TableRow
                  key={x._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    {x.username}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    {x.email}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    <div className="flex flex-col gap-2">
                      {x.ownedMiners?.map((item) => (
                        <div>{`${item.itemId.name} x ${
                          item.qty
                        }, validity: ${item.validity
                          .toString()
                          .slice(0, 10)}`}</div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    {x.payoutMode}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {data?.totalPages > 1 && (
        <PaginationComponent
          page={currentPage}
          totalPage={data?.totalPages}
          pageChange={(e, v) => setCurrentPage(v)}
        />
      )}
    </div>
  );
}
