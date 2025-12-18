import React from "react";
import { useGetEvents } from "../../../hooks/adminEvents/useAdminEvents";
import Loading from "../../Loading";
import { SingleError } from "../../../pages";
import EventCard from "./EventCard";

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data?.map((item) => (
          <EventCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}
