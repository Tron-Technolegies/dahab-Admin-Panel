import React from "react";
import { Link } from "react-router-dom";
import useGetAllMiners from "../../../../hooks/adminMining/useGetAllMiners";
import Loading from "../../../Loading";
import MinerCard from "./MinerCard";

export default function MinersSection() {
  const { loading, miners } = useGetAllMiners();
  return (
    <div className="p-5 w-full flex flex-col">
      <p className="text-lg font-semibold mb-5">All Miners</p>
      <Link
        className="px-3 py-2 rounded-md bg-homeBg text-white self-end hover:bg-homeBgGradient"
        to={"/admin/mining/miner/new"}
      >
        Add New
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 my-5">
          {miners.length > 0 &&
            miners.map((item) => (
              <MinerCard
                key={item._id}
                image={item.image}
                name={item.name}
                power={item.power}
                hashrate={item.hashRate}
                hostingFee={item.hostingFeePerKw}
                stock={item.stock}
                price={item.price}
                id={item._id}
              />
            ))}
        </div>
      )}
    </div>
  );
}
