import React, { useState } from "react";
import useGetSats from "../../../../hooks/adminMining/useGetSats";
import Loading from "../../../Loading";
import { useSelector } from "react-redux";
import useAddNewSats from "../../../../hooks/adminMining/useAddNewSats";

export default function BTCPerHashRate() {
  const [newSats, setNewSats] = useState(0);
  const { loading, refetch } = useGetSats();
  const { sats } = useSelector((state) => state.admin);

  const { loading: addLoading, addNewSats } = useAddNewSats();
  return (
    <div className="p-5">
      <div className="flex flex-col gap-2 border-b border-homeBg pb-5">
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">Enter New Sats/Day:</label>
          <input
            className="p-2 rounded-lg"
            type="number"
            value={newSats}
            onChange={(e) => setNewSats(e.target.value)}
          />
        </div>

        <button
          onClick={async () => {
            await addNewSats({ sats: newSats });
            refetch();
          }}
          className="px-3 py-2 bg-homeBg text-white rounded-md w-fit ms-auto"
        >
          Submit
        </button>
        {addLoading && <Loading />}
      </div>
      {loading ? (
        <Loading />
      ) : (
        <p className="text-lg font-semibold my-5">
          Current Value: {sats?.toFixed(9)}
        </p>
      )}
    </div>
  );
}
