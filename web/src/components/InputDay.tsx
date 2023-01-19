export const InputDay = () => {
  return (
    <>
      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        name="run"
      />
      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        name="water"
      />

      <input
        type="checkbox"
        className="w-16 h-16 rounded-lg appearance-none border-2 border-[#27272A] bg-[#1b1b1b] checked:bg-[#8b5cf6] checked:border-2 checked:border-[#A78BFA]"
        name="food"
      />
    </>
  );
};
