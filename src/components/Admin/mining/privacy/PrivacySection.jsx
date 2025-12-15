import React from "react";
import AddNewPrivacyForm from "./AddNewPrivacyForm";
import AllPrivacies from "./AllPrivacies";
import useGetAllPrivacy from "../../../../hooks/adminMining/useGetAllPrivacy";
import Loading from "../../../Loading";

export default function PrivacySection() {
  const { loading, refetch, policies } = useGetAllPrivacy();
  return (
    <div className="p-5 flex flex-col gap-3">
      <p className="text-lg font-semibold">Privacy Policies</p>
      <p className="mt-5">Add New Privacy Policy</p>
      <AddNewPrivacyForm refetch={refetch} />
      {loading ? <Loading /> : <AllPrivacies policies={policies} />}
    </div>
  );
}
