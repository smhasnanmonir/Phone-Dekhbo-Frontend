import { NestedData } from "@/interface/PhoneDetailsPageInterface";

const NestedDataShower = ({ nestedData }: { nestedData: NestedData }) => {
  return (
    <div className="grid">
      {Object.entries(nestedData).map(([key, value], index) => (
        <div
          key={key}
          className="px-2 hover:bg-blue-100 group hover:cursor-pointer transition-all duration-150 ease-in-out"
        >
          <p className="font-semibold ">
            <span className="text-slate-600 capitalize">{key}</span>: {value}
          </p>
          {index < Object.entries(nestedData).length - 1 && (
            <p className="h-[0.5px] w-full bg-slate-200 group-hover:bg-slate-300"></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedDataShower;
