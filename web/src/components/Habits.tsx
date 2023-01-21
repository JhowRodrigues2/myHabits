import Header from "./Header";
import Task from "./Task";
import { Days } from "./Days";
import { InputDay } from "./InputDay";
import { ReactElement, useEffect, useState } from "react";
export const Habits = () => {
  const [dayHabit, setDayHabit] = useState<ReactElement[]>([]);
  const [storage, setStorage] = useState<any>([]);

  const handleClick = () => {
    const date = new Date().toLocaleDateString("pt-br");
    setDayHabit([
      <Days>
        <InputDay date={`${date.slice(0, 5)}`} />
      </Days>,
    ]);

    setStorage(JSON.stringify(dayHabit));

    localStorage.setItem("myHabits", storage);
  };

  console.log(storage);
  /*const data = JSON.parse(localStorage.getItem("myHabits"));

  useEffect(() => {
    setDayHabit(data);
  }, []);
*/
  return (
    <div>
      <Header onClick={handleClick} />
      <form action="" className="flex p-12 pt-[182px] pb-12 w-fit">
        <Task />
        <div className="flex ml-8 gap-12 ">{dayHabit}</div>
      </form>
    </div>
  );
};
