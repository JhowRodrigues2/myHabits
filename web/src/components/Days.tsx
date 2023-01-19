type DayProps = {
  children: React.ReactNode;
};
export const Days = ({ children }: DayProps) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};
