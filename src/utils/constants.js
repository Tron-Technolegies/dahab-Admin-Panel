export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api"
    : "https://api.dahabminers.com/api";
//"https://api.dahabminers.com/api";
//http://localhost:3000/api

export const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Dubai", // UAE timezone
};
