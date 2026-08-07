import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const VercelAnalytics: React.FC = () => {
  if (typeof window === "undefined") return null;
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") return null;

  return <Analytics />;
};

export default VercelAnalytics;
