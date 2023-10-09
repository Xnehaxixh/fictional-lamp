import React from "react";

export const RoundIcon = ({ color }: { color: string }) => (
  <div
    style={{
      backgroundColor: color,
    }}
    className="w-5 h-5 rounded-full bg-slate-700"
  />
);
