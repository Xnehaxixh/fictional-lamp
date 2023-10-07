import React from "react";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <Home />
      </div>
    </div>
  );
}
