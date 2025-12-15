import React, { useState } from "react";
import FormInput from "../../../FormInput";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import FormSelect from "../../../FormSelect";
import { BsUpload } from "react-icons/bs";
import axios from "axios";
import { BASE_URL } from "../../../../utils/constants";
import { toast } from "react-toastify";
import Loading from "../../../Loading";

export const action = async ({ request }) => {
  const formData = await request.formData();
  try {
    const response = await axios.post(
      `${BASE_URL}/mining/product/miners`,
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

export default function AddNewMiner() {
  const [imageUrl, setImageUrl] = useState("");
  console.log(imageUrl);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function handleChange(e) {
    const formData = new FormData();
    formData.append("Image", e.target.files[0]);
    const file = formData.get("Image");
    setImageUrl(file.name);
  }
  return (
    <div className="p-5 flex flex-col">
      <Link
        to={"/admin/mining"}
        className="bg-homeBg hover:bg-homeBgGradient px-4 py-2 rounded-md w-fit text-white self-end"
      >
        Go Back
      </Link>
      <h4 className="text-xl font-semibold">Add A Miner</h4>
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
          admin
        />
        <FormInput
          admin
          title={"Hashrate (TH/s)"}
          type={"text"}
          name={"hashRate"}
        />
        <FormInput admin title={"Power (KW/h)"} type={"text"} name={"power"} />
        <FormInput admin title={"Price"} type={"text"} name={"price"} />
        <FormInput admin title={"Stock"} type={"text"} name={"stock"} />
        <FormInput
          admin
          title={"Hosting Fee Per KW"}
          type={"text"}
          name={"hostingFeePerKw"}
        />
        <FormInput
          admin
          title={"Break Even Hash"}
          type={"text"}
          name={"breakEvenHash"}
        />
        <FormInput admin title={"Coin"} type={"text"} name={"coin"} />
        <FormInput admin title={"Algorithm"} type={"text"} name={"algorithm"} />
        <p className="text-red-500 text-sm">
          Caution: Automation of Revenue and Hosting fee is based on this
          category Field.
        </p>
        <FormSelect
          title={"Category"}
          list={["A1246", "S19KPro"]}
          issue
          name={"category"}
        />
        <FormInput
          admin
          title={"Description"}
          type={"text"}
          name={"description"}
        />
        <FormInput admin title={"Subtitle"} type={"text"} name={"subtitle"} />
        <FormInput
          admin
          title={"Investment Factor"}
          type={"text"}
          name={"investmentFactor"}
        />
        <FormInput
          admin
          title={"Risk Factor"}
          type={"text"}
          name={"riskFactor"}
        />
        <FormInput
          admin
          title={"Efficiency Factor"}
          type={"text"}
          name={"efficiencyFactor"}
        />
        <FormInput
          admin
          title={"Revenue Factor"}
          type={"text"}
          name={"revenueFactor"}
        />
        <FormInput
          admin
          title={"Hosting Factor"}
          type={"text"}
          name={"hostingFactor"}
        />
        <FormInput
          admin
          title={"Features (Each Features comma seperated)"}
          type={"text"}
          name={"features"}
        />
        <FormInput
          admin
          title={"Ideal For (Each Features comma seperated)"}
          type={"text"}
          name={"idealFor"}
        />
        <FormSelect
          title={"3 Year Hosting"}
          list={["No", "Yes"]}
          issue
          name={"bulkHosting"}
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
              required
            />
            <div className="text-xl">
              <BsUpload />
            </div>
            <p>Upload</p>
          </label>
          {imageUrl && <p>{imageUrl}</p>}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-homeBg hover:bg-homeBgGradient px-3 py-2 rounded-md self-end text-white my-5"
        >
          Add Miner
        </button>
        {isSubmitting && <Loading />}
      </Form>
    </div>
  );
}
