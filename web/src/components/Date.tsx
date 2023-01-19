import React from "react";

type DateProps = {
  date: String;
};

export const Date = ({ date }: DateProps) => {
  return (
    <div className="mb-2 text-center font-mono text-xl leading-[125%] text-[#A1A1A1]">
      {date}
    </div>
  );
};
