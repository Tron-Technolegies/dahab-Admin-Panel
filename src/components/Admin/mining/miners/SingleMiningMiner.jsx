import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetSingleMiner from "../../../../hooks/adminMining/useGetSingleMiner";
import Loading from "../../../Loading";
import { GoDotFill } from "react-icons/go";
import InfoContainer from "./InfoContainer";

export default function SingleMiningMiner() {
  const { id } = useParams();
  const { loading, miner } = useGetSingleMiner({ id });
  return loading ? (
    <Loading />
  ) : (
    <div className="p-5 flex flex-col gap-3">
      <Link
        to={"/admin/mining"}
        className="bg-homeBg hover:bg-homeBgGradient px-4 py-2 rounded-md w-fit text-white self-end"
      >
        Go Back
      </Link>
      <h2 className="text-xl font-semibold">{miner?.name}</h2>
      <div className="flex justify-between items-start w-full my-5 md:flex-row flex-col">
        <img src={miner?.image} className="md:w-2/5 w-full object-cover" />
        <div className="md:w-1/2 w-full flex flex-col gap-2">
          <p className="font-semibold">{miner?.description}</p>
          <p className="italic">{miner?.subtitle}</p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> HashRate:{" "}
            <span className="font-bold">{miner?.hashRate} TH/s</span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Power:{" "}
            <span className="font-bold">{miner?.power} KW/h</span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Price:{" "}
            <span className="font-bold">AED {miner?.price}</span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Stock:{" "}
            <span className="font-bold">{miner?.stock}</span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Items Sold:{" "}
            <span className="font-bold">{miner?.sold || 0} </span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Coin:{" "}
            <span className="font-bold">{miner?.coin} </span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Algorithm:{" "}
            <span className="font-bold">{miner?.algorithm} </span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> HostingFee Per KW:{" "}
            <span className="font-bold">AED {miner?.hostingFeePerKw} </span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Break Even Hashprice:{" "}
            <span className="font-bold">AED {miner?.breakEvenHash || 0} </span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> 3 Year Hosting:{" "}
            <span className="font-bold">
              {miner?.isBulkHosting ? "Yes" : "No"}
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <GoDotFill /> Category:{" "}
            <span className="font-bold"> {miner?.category} </span>
            <span className="text-xs text-red-500">
              (Dont change this field. Automation of revenue and hosting fee is
              based on this field)
            </span>
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-xl my-5 font-semibold">Stats</h4>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 item-center w-full">
            <InfoContainer
              name={"Investment"}
              percent={miner?.investmentFactor}
            />
            <p className="text-black">{`${miner?.investmentFactor}%`}</p>
          </div>
          <div className="flex gap-2 item-center w-full">
            <InfoContainer name={"Revenue"} percent={miner?.revenueFactor} />
            <p className="text-black">{miner?.revenueFactor}%</p>
          </div>
          <div className="flex gap-2 item-center w-full">
            <InfoContainer
              name={"Efficiency"}
              percent={miner?.efficiencyFactor}
            />
            <p className="text-black">{miner?.efficiencyFactor}%</p>
          </div>
          <div className="flex gap-2 item-center w-full">
            <InfoContainer name={"Risk"} percent={miner?.riskFactor} />
            <p className="text-black">{miner?.riskFactor}%</p>
          </div>
          <div className="flex gap-2 item-center w-full">
            <InfoContainer name={"Hosting"} percent={miner?.hostingFactor} />
            <p className="text-black">{miner?.hostingFactor}%</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-xl my-5 font-semibold">Features</h4>
        <div className="flex flex-col gap-3 mb-5">
          {miner?.features.map((item) => (
            <p key={item} className="flex gap-2 items-center">
              <GoDotFill />
              <span>{item}</span>
            </p>
          ))}
        </div>
        <h4 className="text-xl my-5 font-semibold">Perfect for</h4>
        <div className="flex flex-col gap-3 mb-5">
          {miner?.idealFor.map((item) => (
            <p key={item} className="flex gap-2 items-center">
              <GoDotFill />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
