import React from "react";

export default function MiningSections({ active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2 p-5">
      <button
        onClick={() => setActive("miners")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "miners" && "bg-homeBgGradient scale-105"
        }`}
      >
        Miners
      </button>
      <button
        onClick={() => setActive("users")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "users" && "bg-homeBgGradient scale-105"
        }`}
      >
        Users
      </button>

      <button
        onClick={() => setActive("A1246 Revenue")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "A1246 Revenue" && "bg-homeBgGradient scale-105"
        }`}
      >
        A1246 Revenue
      </button>
      <button
        onClick={() => setActive("S19KPro Revenue")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "S19KPro Revenue" && "bg-homeBgGradient scale-105"
        }`}
      >
        S19KPro Revenue
      </button>
      <button
        onClick={() => setActive("Payout")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "Payout" && "bg-homeBgGradient scale-105"
        }`}
      >
        Payout
      </button>
      <button
        onClick={() => setActive("BTC")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "BTC" && "bg-homeBgGradient scale-105"
        }`}
      >
        BTC/Th/Day
      </button>
      <button
        onClick={() => setActive("A1246 Uptime")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "A1246 Uptime" && "bg-homeBgGradient scale-105"
        }`}
      >
        A1246 Uptime
      </button>
      <button
        onClick={() => setActive("notifications")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "notifications" && "bg-homeBgGradient scale-105"
        }`}
      >
        Notifications
      </button>
      <button
        onClick={() => setActive("T&C")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "T&C" && "bg-homeBgGradient scale-105"
        }`}
      >
        T & C
      </button>
      <button
        onClick={() => setActive("privacy")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "privacy" && "bg-homeBgGradient scale-105"
        }`}
      >
        Privacy
      </button>
      <button
        onClick={() => setActive("voucher")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "voucher" && "bg-homeBgGradient scale-105"
        }`}
      >
        Vouchers
      </button>
      <button
        onClick={() => setActive("owned")}
        className={`px-4 py-2 bg-homeBg text-white hover:bg-homeBgGradient duration-300 ease-in-out rounded-md ${
          active === "owned" && "bg-homeBgGradient scale-105"
        }`}
      >
        Owned Miners
      </button>
    </div>
  );
}
