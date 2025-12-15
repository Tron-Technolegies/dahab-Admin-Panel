import React, { useEffect, useState } from "react";
import PaginationComponent from "../../../components/Admin/mining/PaginationComponent";
import NotificationContainer from "../../../components/Admin/notifications/NotificationContainer";
import FormSelect from "../../../components/FormSelect";
import { useGetAllNotifications } from "../../../hooks/adminNotifications/useNotifications";
import { toast } from "react-toastify";

export default function AdminNotification() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("ALL");
  const { isLoading, data } = useGetAllNotifications({
    currentPage: page,
    status,
  });

  return (
    <div className="flex flex-col gap-2 w-full">
      <h4 className="text-xl font-semibold">All Notifications</h4>
      <div className="max-w-[150px] w-full ms-auto">
        <FormSelect
          issue
          list={["ALL", "read", "unread"]}
          value={status}
          onchange={(e) => setStatus(e.target.value)}
        />
      </div>
      <p className="font-semibold">{`${data?.totalNotifications} notifications found`}</p>
      <NotificationContainer data={data} isLoading={isLoading} />
      {data?.totalPages > 1 && (
        <PaginationComponent
          page={page}
          totalPage={data?.totalPages}
          pageChange={(e, v) => {
            setPage(v);
          }}
        />
      )}
    </div>
  );
}
