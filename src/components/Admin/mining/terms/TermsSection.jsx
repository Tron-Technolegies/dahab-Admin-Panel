import React from "react";
import AddNewTermsForm from "./AddNewTermsForm";
import AllTerms from "./AllTerms";
import useGetAllTerms from "../../../../hooks/adminMining/useGetAllTerms";
import Loading from "../../../Loading";

export default function TermsSection() {
  const { loading, items, refetch } = useGetAllTerms();
  return (
    <div className="p-5 flex flex-col gap-3">
      <p className="text-lg font-semibold">Terms and Conditions</p>
      <p className="mt-5">Add New Terms & Conditions</p>
      <AddNewTermsForm refetch={refetch} />
      {loading ? <Loading /> : <AllTerms revenues={items} />}
    </div>
  );
}
