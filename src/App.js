import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [cx, setCx] = useState(0);
  const [cy, setCy] = useState(0);

  return (
    <div>
      <Playground cx={cx} cy={cy} />
      <input
        type="number"
        value={cx}
        onChange={(e) => {
          setCx(e.target.value);
        }}
      />
      <input
        type="number"
        value={cy}
        onChange={(e) => {
          setCy(e.target.value);
        }}
      />
    </div>
  );
}

export function Playground({ cx, cy }) {
  return (
    <div class="rectangle">
      <div
        class="circle"
        style={{
          transform: `translate(${cx > 400 ? 350 : cx}px, ${
            cy > 400 ? 350 : cy
          }px)`
        }}
      ></div>
    </div>
  );
}
