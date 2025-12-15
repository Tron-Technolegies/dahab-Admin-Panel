import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavigationPage() {
  const navigate = useNavigate();
  navigate("/admin");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link className="px-3 py-2 bg-homeBg text-white" to={"/admin"}>
        Go to Admin Panel
      </Link>
    </div>
  );
}
