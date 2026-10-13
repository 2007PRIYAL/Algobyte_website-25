// Central API configuration for Algobyte
// In production, falls back to the live Render backend URL.
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://algobyte-website-25.onrender.com";
