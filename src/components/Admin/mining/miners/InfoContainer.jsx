import React from "react";
import DangerBar from "./DangerBar";

export default function InfoContainer({ name, percent }) {
  return (
    <div className="flex items-center justify-between gap-5 w-full">
      <p className="w-[120px] text-black">{name}</p>
      <DangerBar percentage={percent} />
    </div>
  );
}
