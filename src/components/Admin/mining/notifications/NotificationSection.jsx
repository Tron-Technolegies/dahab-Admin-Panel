import React, { useEffect, useState } from "react";
import FormInput from "../../../FormInput";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAddNotification from "../../../../hooks/adminMining/useAddNotification";
import useGetAllNotifications from "../../../../hooks/adminMining/useGetAllNotifications";
import Loading from "../../../Loading";
import PaginationComponent from "../PaginationComponent";

export default function NotificationSection() {
  const [page, setPage] = useState(1);
  const { loading, addNew } = useAddNotification();
  const {
    loading: notificationLoading,
    notifications,
    refetch,
    totalPages,
  } = useGetAllNotifications({ currentPage: page });
  const [message, setMessage] = useState("");

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
      <p className="text-lg font-semibold">Add New Notification</p>
      <div className="my-5">
        <FormInput
          admin
          title={"notification"}
          value={message}
          onchange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={async () => {
            await addNew({ message });
            setMessage("");
            refetch();
          }}
          className="px-4 py-2 bg-homeBg rounded-lg text-white hover:bg-homeBgGradient"
        >
          Send
        </button>
        {loading && <Loading />}
      </div>
      <p className="text-lg font-semibold">All Notifications</p>
      {notificationLoading ? (
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
                  Message
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notifications?.map((x) => (
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
                        {new Date(x.createdAt).toLocaleDateString(
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
                    {x.content}
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
