import { MdOutlineAttachMoney } from "react-icons/md";
import { GrView, GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MinerCard({
  hashrate,
  power,
  image,
  name,
  id,
  stock,
  price,
  hostingFee,
}) {
  return (
    <div
      className={` p-5 rounded-md flex flex-col justify-between items-center gap-1 w-full min-h-[300px] text-black shadow-md hover:scale-105 bg-gray-300 duration-300 ease-in-out`}
    >
      <div className="flex justify-between w-full">
        <div className={` text-sm flex flex-col gap-2 text-black`}>
          <div className="flex gap-2 items-center">
            <p>{hashrate} TH/s</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>{power} KW/h</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className={`flex gap-1 items-center text-sm text-black`}>
            <span className=" p-0">
              <MdOutlineAttachMoney />
            </span>
            {hostingFee} per KW/h
          </p>
          <p>Stock: {stock}</p>
        </div>
      </div>
      <img src={image} className="w-36 object-cover" />
      <div>
        <p className="text-center font-semibold">{name}</p>
        <p className="text-center font-bold text-xl">AED {price}</p>
        <div className="flex justify-center gap-5 items-center my-3">
          <Link to={`/admin/mining/miner/${id}`} className="text-blue-800">
            <GrView />
          </Link>
          <Link to={`/admin/mining/miner/edit/${id}`} className="text-gray-500">
            <GrEdit />
          </Link>
          <button className="text-red-700">
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
