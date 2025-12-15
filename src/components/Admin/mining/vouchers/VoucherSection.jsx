import React from "react";
import { Link } from "react-router-dom";
import { useGetAllVouchers } from "../../../../hooks/adminMining/useVoucher";
import Loading from "../../../Loading";
import VoucherCard from "./VoucherCard";

export default function VoucherSection() {
  const { isLoading, data } = useGetAllVouchers();
  return (
    <div className="p-5 w-full flex flex-col">
      <p className="text-lg font-semibold mb-5">All Vouchers</p>
      <Link
        className="px-3 py-2 rounded-md bg-homeBg text-white self-end hover:bg-homeBgGradient"
        to={"/admin/mining/voucher/new"}
      >
        Add New
      </Link>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 gap-5 place-items-center mt-5">
          {data.map((item) => (
            <VoucherCard
              key={item._id}
              name={item.name}
              code={item.code}
              discount={item.discount}
              description={item.description}
              validity={item.validity}
              applicable={item.applicableFor}
              minimum={item.minimumSpent}
              id={item._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
