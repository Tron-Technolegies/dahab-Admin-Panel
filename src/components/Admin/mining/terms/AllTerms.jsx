import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AllTerms({ revenues }) {
  return (
    <div>
      <p className="text-lg font-semibold">All Terms and Conditions</p>
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
                Version
              </TableCell>
              {/* <TableCell
                sx={{
                  width: "12.5%",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Action
              </TableCell> */}
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
                  {x.date.slice(0, 10)}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ width: "12.5%", textAlign: "center" }}
                >
                  {x.version}
                </TableCell>
                {/* <TableCell
                  component="th"
                  scope="row"
                  sx={{ width: "12.5%", textAlign: "center" }}
                >
                  <button className="px-4 py-2 rounded-md bg-homeBg hover:bg-homeBgGradient">
                    View
                  </button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
