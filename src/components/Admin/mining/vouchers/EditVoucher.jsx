import React from "react";
import { Link, useParams } from "react-router-dom";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import {
  useEditVoucher,
  useGetSingleVoucher,
} from "../../../../hooks/adminMining/useVoucher";
import Loading from "../../../Loading";

export default function EditVoucher() {
  const { id } = useParams();
  const { isLoading, data } = useGetSingleVoucher(id);
  const { isPending, editVoucher } = useEditVoucher();

  function handleEdit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    editVoucher({ data: data, id: id });
  }
  return (
    <div className="p-5 flex flex-col">
      <Link
        to={"/admin/mining"}
        className="bg-homeBg hover:bg-homeBgGradient px-4 py-2 rounded-md w-fit text-white self-end"
      >
        Go Back
      </Link>
      <h4 className="text-xl font-semibold">Edit Voucher</h4>
      {isLoading ? (
        <Loading />
      ) : (
        <form className="flex flex-col my-5" onSubmit={handleEdit}>
          <FormInput
            name={"name"}
            type={"text"}
            title={"Name"}
            defaultValue={data.name}
            placeholder={"Enter Name for coupon"}
            admin
          />
          <FormInput
            name={"code"}
            type={"text"}
            title={"Coupon Code"}
            placeholder={"Enter the coupon code"}
            defaultValue={data.code}
            admin
          />
          <FormInput
            name={"description"}
            type={"text"}
            title={"Coupon Description"}
            placeholder={"Enter the description for coupon"}
            defaultValue={data.description}
            admin
          />
          <FormInput
            name={"discount"}
            type={"number"}
            title={"Discount (%)"}
            placeholder={"Enter the discount percentage"}
            defaultValue={data.discount}
            admin
          />
          <FormSelect
            name={"voucherType"}
            title={"Applicable For"}
            list={["miner purchase", "wallet Topup", "Both"]}
            defaultValue={data.applicableFor}
            issue
          />
          <FormInput
            name={"validity"}
            title={"Validity"}
            type={"date"}
            admin
            defaultValue={data.validity?.split("T")[0]}
          />
          <FormInput
            name={"minimum"}
            title={"Minimum Spent"}
            type={"number"}
            defaultValue={data.minimumSpent}
            placeholder={"Enter the minimum spent for this coupon"}
            admin
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-homeBg hover:bg-homeBgGradient px-3 py-2 rounded-md self-end text-white my-5"
          >
            Update Voucher
          </button>
          {isPending && <Loading />}
        </form>
      )}
    </div>
  );
}
