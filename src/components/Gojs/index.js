// App.js
import React from "react";
import "./App.css"; // contains .diagram-component CSS
import GoJs from "./gojs";
import { faultreeData } from "../../helpers/utils";
export default function Gojs() {
  return (
    <div width={"1200px"}>
      <GoJs data={faultreeData} />
    </div>
  );
}
