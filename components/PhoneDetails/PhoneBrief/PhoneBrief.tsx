import { SinglePhoneData } from "@/interface/singlePhoneResponse";
import {
  Smartphone,
  CalendarClock,
  Cpu,
  Camera,
  MemoryStick,
  BatteryCharging,
} from "lucide-react";

const PhoneBrief = ({ device }: { device: SinglePhoneData }) => {
  return (
    <div>
      <div>
        <p>
          {" "}
          <span className="text-slate-400">Brand: </span>
          {device?.data?.brand}
        </p>
        <p>
          <span className="text-slate-400">Release Date: </span>
          {device?.data?.releaseDate}
        </p>
        <p>
          <span className="text-slate-400">Price: </span>
          <span className="text-[22px] text-blue-600">
            {device?.data?.price}{" "}
          </span>
          Taka
        </p>
        <div className="block space-y-3">
          <div className="flex gap-3 items-center">
            <CalendarClock color="blue" size={44} />
            <div>
              <p className="text-slate-500">
                {(device?.data?.status).toLocaleUpperCase()}
              </p>
              <p>Release Date: {device?.data?.releaseDate}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Smartphone color="blue" size={44} />
            <div>
              <p className="text-slate-500">Display</p>
              <p>
                {device?.data?.specs?.[0]?.display?.size} {'"'}{" "}
                {(device?.data?.specs?.[0]?.display?.resolution).toLocaleUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Cpu color="blue" size={44} />
            <div>
              <p className="text-slate-500">Processor</p>
              <p>
                {(device?.data?.specs?.[0]?.chipset?.model).toLocaleUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Camera color="blue" size={44} />
            <div>
              <p className="text-slate-500">Camera</p>
              <p>
                {(device?.data?.specs?.[0]?.camera?.main).toLocaleUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <MemoryStick color="blue" size={44} />
            <div>
              <p className="text-slate-500">Storage</p>
              <p>
                {(device?.data?.specs?.[0]?.memory?.internal).toLocaleUpperCase()}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <BatteryCharging color="blue" size={44} />
            <div>
              <p className="text-slate-500">Storage</p>
              <p>{device?.data?.specs?.[0]?.battery?.capacity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneBrief;
