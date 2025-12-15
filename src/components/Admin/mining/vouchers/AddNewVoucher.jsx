import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { useCreateVoucher } from "../../../../hooks/adminMining/useVoucher";
import Loading from "../../../Loading";

export default function AddNewVoucher() {
  const { createVoucher, isPending } = useCreateVoucher();

  function handleAdd(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    createVoucher({ data: data });
  }
  return (
    <div className="p-5 flex flex-col">
      <Link
        to={"/admin/mining"}
        className="bg-homeBg hover:bg-homeBgGradient px-4 py-2 rounded-md w-fit text-white self-end"
      >
        Go Back
      </Link>
      <h4 className="text-xl font-semibold">Add A New Voucher</h4>
      <form className="flex flex-col my-5" onSubmit={handleAdd}>
        <FormInput
          name={"name"}
          type={"text"}
          title={"Name"}
          placeholder={"Enter Name for coupon"}
          admin
        />
        <FormInput
          name={"code"}
          type={"text"}
          title={"Coupon Code"}
          placeholder={"Enter the coupon code"}
          admin
        />
        <FormInput
          name={"description"}
          type={"text"}
          title={"Coupon Description"}
          placeholder={"Enter the description for coupon"}
          admin
        />
        <FormInput
          name={"discount"}
          type={"number"}
          title={"Discount (%)"}
          placeholder={"Enter the discount percentage"}
          admin
        />
        <FormSelect
          name={"voucherType"}
          title={"Applicable For"}
          list={["miner purchase", "wallet Topup", "Both"]}
          issue
        />
        <FormInput name={"validity"} title={"Validity"} type={"date"} admin />
        <FormInput
          name={"minimum"}
          title={"Minimum Spent"}
          type={"number"}
          placeholder={"Enter the minimum spent for this coupon"}
          admin
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-homeBg hover:bg-homeBgGradient px-3 py-2 rounded-md self-end text-white my-5"
        >
          Add Voucher
        </button>
        {isPending && <Loading />}
      </form>
    </div>
  );
}
