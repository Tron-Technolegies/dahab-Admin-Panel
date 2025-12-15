import React, { useState } from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { BsUpload } from "react-icons/bs";
import Loading from "../../../Loading";
import axios from "axios";
import { BASE_URL } from "../../../../utils/constants";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  try {
    const { id } = params;
    const { data } = await axios.get(
      `${BASE_URL}/mining/product/miners/${id}`,
      { withCredentials: true }
    );
    return { id, data };
  } catch (err) {
    console.error(
      err?.response?.data?.msg || err?.error || "something went wrong"
    );
    return err;
  }
};
export const action = async ({ request, params }) => {
  const { id } = params;
  const formData = await request.formData();
  try {
    const response = await axios.patch(
      `${BASE_URL}/mining/product/miners/${id}`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toast.success(response.data?.msg);
    return redirect("/admin/mining");
  } catch (err) {
    toast.error(
      err?.response?.data?.msg || err?.error || "something went wrong"
    );
    return err;
  }
};

export default function EditMiningMiner() {
  const [imageName, setImageName] = useState("");
  const { id, data } = useLoaderData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";

  function handleChange(e) {
    const formData = new FormData();
    formData.append("Image", e.target.files[0]);
    const file = formData.get("Image");
    setImageName(file.name);
  }
  return isLoading ? (
    <Loading />
  ) : (
    <div className="p-5 flex flex-col">
      <Link
        to={"/admin/mining"}
        className="bg-homeBg hover:bg-homeBgGradient px-4 py-2 rounded-md w-fit text-white self-end"
      >
        Go Back
      </Link>
      <h4 className="text-xl font-semibold">Edit Miner</h4>
      <Form
        method="post"
        encType="multipart/form-data"
        className="my-5 flex flex-col "
      >
        <FormInput
          title={"Name"}
          type={"text"}
          placeholder={"Enter name"}
          name={"name"}
          defaultValue={data?.name}
          admin
        />
        <FormInput
          admin
          title={"Hashrate (TH/s)"}
          type={"text"}
          name={"hashRate"}
          defaultValue={data?.hashRate}
        />
        <FormInput
          admin
          title={"Power (KW/h)"}
          type={"text"}
          name={"power"}
          defaultValue={data?.power}
        />
        <FormInput
          admin
          title={"Price"}
          type={"text"}
          name={"price"}
          defaultValue={data?.price}
        />
        <FormInput
          admin
          title={"Stock"}
          type={"text"}
          name={"stock"}
          defaultValue={data?.stock}
        />
        <FormInput
          admin
          title={"Hosting Fee Per KW"}
          type={"text"}
          name={"hostingFeePerKw"}
          defaultValue={data?.hostingFeePerKw}
        />
        <FormInput
          admin
          title={"Break Even Hash"}
          type={"text"}
          name={"breakEvenHash"}
          defaultValue={data?.breakEvenHash}
        />
        <FormInput
          admin
          title={"Coin"}
          type={"text"}
          name={"coin"}
          defaultValue={data?.coin}
        />
        <FormInput
          admin
          title={"Algorithm"}
          type={"text"}
          name={"algorithm"}
          defaultValue={data?.algorithm}
        />
        <p className="text-red-500 text-sm">
          Caution: Automation of Revenue and Hosting fee is based on this
          category Field.
        </p>
        <FormSelect
          title={"Category"}
          list={["A1246", "S19KPro"]}
          issue
          name={"category"}
          defaultValue={data?.category}
        />
        <FormInput
          admin
          title={"Description"}
          type={"text"}
          name={"description"}
          defaultValue={data?.description}
        />
        <FormInput
          admin
          title={"Subtitle"}
          type={"text"}
          name={"subtitle"}
          defaultValue={data?.subtitle}
        />
        <FormInput
          admin
          title={"Investment Factor"}
          type={"text"}
          name={"investmentFactor"}
          defaultValue={data?.investmentFactor}
        />
        <FormInput
          admin
          title={"Risk Factor"}
          type={"text"}
          name={"riskFactor"}
          defaultValue={data?.riskFactor}
        />
        <FormInput
          admin
          title={"Efficiency Factor"}
          type={"text"}
          name={"efficiencyFactor"}
          defaultValue={data?.efficiencyFactor}
        />
        <FormInput
          admin
          title={"Revenue Factor"}
          type={"text"}
          name={"revenueFactor"}
          defaultValue={data?.revenueFactor}
        />
        <FormInput
          admin
          title={"Hosting Factor"}
          type={"text"}
          name={"hostingFactor"}
          defaultValue={data?.hostingFactor}
        />
        <FormInput
          admin
          title={"Features (Each Features comma seperated)"}
          type={"text"}
          name={"features"}
          defaultValue={data?.features?.join(",")}
        />
        <FormInput
          admin
          title={"Ideal For (Each Features comma seperated)"}
          type={"text"}
          name={"idealFor"}
          defaultValue={data?.idealFor?.join(",")}
        />
        <FormSelect
          title={"3 Year Hosting"}
          list={["No", "Yes"]}
          issue
          name={"bulkHosting"}
          defaultValue={data?.isBulkHosting ? "Yes" : "No"}
        />
        <div className="my-3">
          <h4 className="mb-2"> Image</h4>
          <label
            className={`flex flex-col gap-2 justify-center border w-fit items-center p-3 rounded-lg border-blue-500 cursor-pointer hover:bg-blue-700 nav-link hover:text-white `}
          >
            <input
              type="file"
              className="hidden"
              accept="image/*"
              name="image"
              onChange={handleChange}
            />
            <div className="text-xl">
              <BsUpload />
            </div>
            <p>Upload</p>
          </label>
          {imageName && <p>{imageName}</p>}
          <img
            src={data?.image}
            alt={data?.name}
            className="w-28 object-cover rounded-md"
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-homeBg hover:bg-homeBgGradient px-3 py-2 rounded-md self-end text-white my-5"
        >
          Update Miner
        </button>
        {isSubmitting && <Loading />}
      </Form>
    </div>
  );
}
