import Header from "./Header";
import Task from "./Task";
import { Date } from "./Date";
import { Days } from "./Days";
import { InputDay } from "./InputDay";
export const Habits = () => {
  return (
    <div>
      <Header />
      <form action="" className="flex p-12 pt-0">
        <Task />
        <div className="flex ml-8 gap-12">
          <Days>
            <Date date={"03/01"} />
            <InputDay />
          </Days>
          <Days>
            <Date date={"04/01"} />
            <InputDay />
          </Days>
          <Days>
            <Date date={"05/01"} />
            <InputDay />
          </Days>
          <Days>
            <Date date={"05/01"} />
            <InputDay />
          </Days>
          <Days>
            <Date date={"07/01"} />
            <InputDay />
          </Days>
          <Days>
            <Date date={"08/01"} />
            <InputDay />
          </Days>
          <Days>
            <Date date={"09/01"} />
            <InputDay />
          </Days>
        </div>
      </form>
    </div>
  );
};
