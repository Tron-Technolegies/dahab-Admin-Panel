import React, { useState } from "react";
import productFullDetails from "../../../utils/productFullDetails";

export default function SingleMinerDetailsTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return null;

  const productInfo = productFullDetails.find(
    (p) => p.slug?.toLowerCase().trim() === product.slug?.toLowerCase().trim()
  );

  const overviewText = productInfo?.overview || product.description;

  const specs =
    productInfo?.specifications ||
    [
      { label: "Manufacturer", value: product.manufacturer },
      { label: "Algorithm", value: product.algorithm },
      { label: "Hash Rate", value: product.hashRate },
      { label: "Power", value: product.power ? `${product.power} W` : null },
      {
        label: "Mineable Coins",
        value: product.cryptoCurrency?.length ? product.cryptoCurrency.join(", ") : null,
      },
    ].filter((item) => item.value);

  return (
    <div className="mt-12">
      {/* Tabs Header */}
      <div className="flex gap-4 border-b border-[#1ECBAF]/30 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 px-2 text-base font-medium transition-all ${
            activeTab === "description"
              ? "text-[#1ECBAF] border-b-2 border-[#1ECBAF]"
              : "text-gray-400 hover:text-[#1ECBAF]"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("specification")}
          className={`pb-2 px-2 text-base font-medium transition-all ${
            activeTab === "specification"
              ? "text-[#1ECBAF] border-b-2 border-[#1ECBAF]"
              : "text-gray-400 hover:text-[#1ECBAF]"
          }`}
        >
          Specification
        </button>
      </div>

      {/* Overview */}
      {activeTab === "description" && (
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {overviewText || <p className="italic text-gray-500">No overview available.</p>}
        </div>
      )}

      {/* Specifications */}
      {activeTab === "specification" && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#1ECBAF]/30 rounded-lg text-white">
            <thead>
              <tr className="bg-[#1ECBAF]/10 text-[#7decda]">
                <th className="py-3 px-4 text-left font-medium border-b border-[#1ECBAF]/20">
                  Feature
                </th>
                <th className="py-3 px-4 text-left font-medium border-b border-[#1ECBAF]/20">
                  Specification
                </th>
              </tr>
            </thead>

            <tbody>
              {specs.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#0e1a20]" : "bg-[#12232d]"
                  } hover:bg-[#18353f] transition`}
                >
                  <td className="py-3 px-4 border-b border-[#1ECBAF]/10">{item.label}</td>
                  <td className="py-3 px-4 border-b border-[#1ECBAF]/10">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
