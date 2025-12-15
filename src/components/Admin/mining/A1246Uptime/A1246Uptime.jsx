import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetUptime from "../../../../hooks/adminMining/useGetUptime";
import Loading from "../../../Loading";

export default function A1246Uptime() {
  const { loading, uptime } = useGetUptime();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (uptime && uptime.uptimeHistory) {
      setHistory(uptime.uptimeHistory.reverse());
    }
  }, [loading, uptime]);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };

  return (
    <div className="p-5">
      <p className="text-lg font-semibold">Uptime History</p>
      {loading ? (
        <Loading />
      ) : (
        uptime &&
        uptime.uptimeHistory && (
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
                    Uptime (%)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history?.map((x) => (
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
                          {new Date(x.date).toLocaleDateString(
                            "en-Us",
                            options
                          )}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "12.5%", textAlign: "center" }}
                    >
                      {x.uptime * 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </div>
  );
}
