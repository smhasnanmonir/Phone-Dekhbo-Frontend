import { LucideIcon } from "lucide-react";

const PhoneSpecReuseAble = ({
  title,
  secondaryTitle,
  icon: Icon,
  secondDivTitle,
  secondDivParaOptional,
}: {
  title: string;
  secondaryTitle: string | number | null;
  icon: LucideIcon;
  secondDivTitle: string | number | null;
  secondDivParaOptional: string | number | null;
}) => {
  return (
    <div className="py-[8px]">
      <div className="border rounded-[4px] gap-3  bg-slate-50">
        <div className="flex items-center justify-between p-2 bg-white">
          <h1 className="text-2xl font-semibold ">{title}</h1>
          {Icon && <Icon />}
        </div>
        <p className="h-[0.5px] w-full bg-slate-200"></p>
        <div className="p-2 hover:bg-blue-100 group hover:cursor-pointer transition-all duration-150 ease-in-out flex items-center">
          <p className=" block text-slate-600">{secondDivTitle} : </p>
          <p className="block pl-2">
            {" "}
            {secondaryTitle} {secondDivParaOptional}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSpecReuseAble;
