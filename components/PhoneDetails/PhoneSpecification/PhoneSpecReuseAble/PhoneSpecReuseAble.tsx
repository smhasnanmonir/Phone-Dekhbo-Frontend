import { PhoneSpecReuseAbleProps } from "@/interface/PhoneDetailsPageInterface";
import NestedDataShower from "./NestedDataShower/NestedDataShower";

const PhoneSpecReuseAble = ({
  title,
  icon: Icon,
  nestedData,
  secondaryTitle,
  secondDivTitle,
  secondDivParaOptional,
}: PhoneSpecReuseAbleProps) => {
  return (
    <div className="py-[8px]">
      <div className="border rounded-[4px] gap-3 bg-slate-50">
        <div className="flex items-center justify-between p-2 bg-white">
          <h1 className="text-2xl font-semibold ">{title}</h1>
          {Icon && <Icon />}
        </div>

        <p className="h-[0.5px] w-full bg-slate-200"></p>

        {/* Content Section */}
        {nestedData ? (
          // Render nested data
          <NestedDataShower nestedData={nestedData} />
        ) : (
          // Render flat data
          <div className="p-2 hover:bg-blue-100 group hover:cursor-pointer transition-all duration-150 ease-in-out flex items-center">
            <p className="block text-slate-600">{secondDivTitle} : </p>
            <p className="block pl-2">
              {secondaryTitle} {secondDivParaOptional}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneSpecReuseAble;
