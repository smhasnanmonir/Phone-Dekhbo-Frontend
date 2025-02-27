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

export type NestedData =
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

export type PhoneSpecReuseAbleProps = {
  title: string;
  icon: LucideIcon;
  nestedData?: NestedData;
  secondaryTitle?: string | number | null;
  secondDivTitle?: string | number | null;
  secondDivParaOptional?: string | number | null;
};
