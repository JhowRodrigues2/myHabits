import Header from "./Header";

export const Habits = () => {
  return (
    <div>
      <Header />
      <form action="" className="flex p-12 pt-0">
        <div className="flex flex-col gap-6 mt-[60px]">
          <div className=" w-16 h-16 flex justify-center items-center">🏃‍♂️</div>
          <div className=" w-16 h-16 flex justify-center items-center">💧</div>
          <div className=" w-16 h-16 flex justify-center items-center">🍎</div>
        </div>

        <div className="flex ml-8 gap-12">
          <div className="flex flex-col gap-6">
            <div className="mb-2 text-center font-mono text-xl leading-[125%] text-[#A1A1A1]">
              03/01
            </div>
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
          </div>
        </div>
      </form>
    </div>
  );
};
