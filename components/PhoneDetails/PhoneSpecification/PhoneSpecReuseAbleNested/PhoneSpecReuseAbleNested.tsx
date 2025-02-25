import {
  BatterySpec,
  BodySpec,
  CameraSpec,
  ChipsetSpec,
  ConnectionSpec,
  DisplaySpec,
  MemorySpec,
  PortsSpec,
  Ratings,
  SoundSpec,
} from "@/interface/singlePhoneResponse";
import { LucideIcon } from "lucide-react";

type NestedData =
  | BodySpec
  | DisplaySpec
  | ChipsetSpec
  | MemorySpec
  | CameraSpec
  | SoundSpec
  | ConnectionSpec
  | PortsSpec
  | BatterySpec
  | Ratings;

const PhoneSpecReuseAbleNested = ({
  title,
  icon: Icon,
  nestedData,
}: {
  title: string;
  icon: LucideIcon;
  nestedData: NestedData;
}) => {
  return (
    <div>
      <div className="py-[8px]">
        <div className="border rounded-[4px] gap-3 bg-slate-50">
          <div className="flex items-center justify-between p-2 bg-white">
            <h1 className="text-2xl font-semibold ">{title}</h1>
            {Icon && <Icon />}
          </div>
          <p className="h-[0.5px] w-full bg-slate-200"></p>
          <p className="h-[0.5px] w-full bg-slate-200"></p>
          <div className="grid">
            {Object.entries(nestedData).map(([key, value], index) => (
              <div
                key={key}
                className="px-2 hover:bg-blue-100 group hover:cursor-pointer transition-all duration-150 ease-in-out"
              >
                <p className="font-semibold ">
                  <span className="text-slate-600 capitalize">{key}</span>:{" "}
                  {value}
                </p>
                {index < Object.entries(nestedData).length - 1 ? (
                  <>
                    <p className="h-[0.5px] w-full bg-slate-200 group-hover:bg-slate-300"></p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSpecReuseAbleNested;
