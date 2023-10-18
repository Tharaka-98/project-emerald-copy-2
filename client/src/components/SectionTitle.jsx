import React from "react";

function SectionTitle({ text }) {
  return (
    <div className="border-b border-base-300 pb-5">
      <h2 className="text-4xl font-bold tracking-wider text-accent capitalize">
        {text}
      </h2>
    </div>
  );
}

export default SectionTitle;
