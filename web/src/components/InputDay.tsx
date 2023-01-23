type InputDayProps = {
  date: string;
  checked?: boolean;
};

export const InputDay = ({ date }: InputDayProps) => {
  return (
    <>
      <div className="mb-2 text-center font-mono text-xl leading-[125%] text-[#A1A1A1]">
        {date}
      </div>
      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        value={"run"}
      />
      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        value={"water"}
      />

      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        value={"food"}
      />
      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        value={"read"}
      />
    </>
  );
};
