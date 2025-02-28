import { PhoneSpec } from "@/interface/singlePhoneResponse";
import { ListItems } from "./ProsConsList";

interface ProsConsProps {
  deviceProsCons: PhoneSpec;
  prosTitle?: string;
  consTitle?: string;
  prosColor?: string;
  consColor?: string;
  className?: string;
}

const ProsCons = ({
  deviceProsCons,
  prosTitle = "Pros",
  consTitle = "Cons",
  prosColor = "bg-green-400",
  consColor = "bg-red-400",
  className = "",
}: ProsConsProps) => {
  return (
    <div className={`${className} space-y-4`}>
      <h1 className="py-[16px] text-2xl underline decoration-[2px] underline-offset-[8px] decoration-blue-400">
        Pros and Cons
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <div className={`${prosColor} p-3 rounded-sm`}>
          <h1 className="text-white text-xl font-semibold">{prosTitle}</h1>
          <ListItems items={deviceProsCons.pros} />
        </div>
        <div className={`${consColor} p-3 rounded-sm`}>
          <h1 className="font-semibold text-xl text-white">{consTitle}</h1>
          <ListItems items={deviceProsCons.cons} />
        </div>
      </div>
    </div>
  );
};

ProsCons.displayName = "ProsCons";

export default ProsCons;
