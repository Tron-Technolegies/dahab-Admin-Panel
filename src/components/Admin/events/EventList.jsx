import React from "react";
import { useGetEvents } from "../../../hooks/adminEvents/useAdminEvents";
import Loading from "../../Loading";
import { SingleError } from "../../../pages";

export default function EventList() {
  const { isLoading, isError, data } = useGetEvents();
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <SingleError />
  ) : (
    <div className="my-5">
      {data.length < 1 && (
        <p className="text-center my-5 text-lg">No Events Available</p>
      )}
    </div>
  );
}
