import Header from "./Header";
import Task from "./Task";
import { Days } from "./Days";
import { InputDay } from "./InputDay";
import { useState } from "react";
export const Habits = () => {
  const [dayHabit, setDayHabit] = useState("");

  const handleClick = () => {
    let date = new Date().toLocaleDateString("pt-br").slice(0, 5);
    setDayHabit(date);
    if (dayHabit == date) {
      alert("Dia já cadastrado!");
    }
  };

  return (
    <div>
      <Header onClick={handleClick} />
      <form action="" className="flex p-12 pt-[182px] pb-12 w-fit">
        <Task />
        <div className="flex ml-8 gap-12 ">
          {dayHabit ? (
            <Days>
              <InputDay date={dayHabit} />
            </Days>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};
