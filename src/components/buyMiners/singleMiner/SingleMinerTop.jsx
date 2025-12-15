import { motion } from "framer-motion";
import React from "react";
import { GoCpu } from "react-icons/go";
import { HiOutlineCube } from "react-icons/hi2";
import { PiLightning } from "react-icons/pi";
import { handleProductEnquiry } from "../../../utils/whatsapp";

export default function SingleMinerTop({ product }) {
  return (
    <motion.section
      className="md:p-10 p-3 bg-[#000618] text-white rounded-lg flex md:flex-row flex-col-reverse my-10 justify-between gap-5 items-center"
      initial={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, transparent 50%, transparent 50%, #0194FE80 100%)",
        borderWidth: "2px",
        borderImageSlice: 1,
        borderRadius: "12px",
        scale: 1,
      }}
      whileHover={{
        borderImageSource:
          "linear-gradient(to bottom right, #004DF480 0%, #A5E7F380 50%, #0194FE80 100%)",
        borderWidth: "2px",
        boxShadow: "0px 0px 20px rgba(1, 148, 254, 0.6)",

        transition: { duration: 0.6, ease: "easeOut" },
      }}
      style={{
        borderStyle: "solid",
      }}
    >
      <div className="w-full max-w-[400px] h-auto md:max-w-[350px] overflow-hidden">
        <img
          src={product?.productImage}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-[488px] flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-[#1ECBAF]">
          {product?.productName}
        </h1>
        <p className="text-base font-semibold text-[#0185E4]">{`Minable Coins - ${product?.cryptoCurrency?.join(
          ", "
        )}`}</p>
        <p className="text-base font-normal text-[#D9EFFF]">
          {product?.description}
        </p>
        <p className="text-sm font-semibold text-[#F79009]">{`Price - AED ${product?.price}`}</p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div className="w-10 h-10 bg-[#0194FE] rounded-full text-xl text-gray-200 flex justify-center items-center">
              <GoCpu />
            </div>
            <span className="text-sm font-normal text-[#D9EFFF]">HashRate</span>
            <span className="text-lg font-medium text-[#5171B8]">
              {product?.hashRate}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-10 h-10 bg-[#0194FE] rounded-full text-xl text-gray-200 flex justify-center items-center">
              <PiLightning />
            </div>
            <span className="text-sm font-normal text-[#D9EFFF]">Power</span>
            <span className="text-lg font-medium text-[#5171B8]">
              {product?.power} Watts
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-10 h-10 bg-[#0194FE] rounded-full text-xl text-gray-200 flex justify-center items-center">
              <HiOutlineCube />
            </div>
            <span className="text-sm font-normal text-[#D9EFFF]">
              Algorithm
            </span>
            <span className="text-lg font-medium text-[#5171B8]">
              {product?.algorithm}
            </span>
          </div>
        </div>
        <div className="text-lg font-semibold flex justify-between items-center">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#7decda" }} // Change color on hover
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }} // Smooth animation
            className="btn-bg text-white px-10 py-3 rounded-lg"
            onClick={() => handleProductEnquiry({ name: product?.productName })}
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
