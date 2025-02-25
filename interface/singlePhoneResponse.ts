export interface SinglePhoneData {
  success: boolean;
  message: string;
  data: PhoneDetails;
}

interface PhoneDetails {
  id: number;
  status: string;
  brand: string;
  model: string;
  image: string;
  releaseDate: string;
  price: number;
  slug: string;
  specs: PhoneSpec[];
}

export interface PhoneSpec {
  id: number;
  phoneId: number;
  network: string;
  body: BodySpec;
  display: DisplaySpec;
  os: string;
  chipset: ChipsetSpec;
  memory: MemorySpec;
  camera: CameraSpec;
  sound: SoundSpec;
  connection: ConnectionSpec;
  ports: PortsSpec;
  battery: BatterySpec;
  colors: string;
  pros: string[];
  cons: string[];
  ratings: Ratings;
}

export interface BodySpec {
  sim: string;
  build: string;
  weight: number;
  dimensions: string;
}

export interface DisplaySpec {
  size: number;
  colors: string;
  features: string[];
  brightness: string;
  protection: string;
  resolution: string;
  aspectRatio: string;
  displayType: string;
  contrastRatio: string;
}

export interface ChipsetSpec {
  gpu: string;
  model: string;
  coprocessor: string;
  architecture: string;
  manufacturer: string;
}

export interface MemorySpec {
  external: string | null;
  internal: string;
}

export interface CameraSpec {
  lens: string;
  main: string;
  other: string;
  photo: string[];
  video: string[];
  features: string[];
  telephoto: string;
  ultrawide: string;
}

export interface SoundSpec {
  microphone: boolean;
  speakerType: string;
  audioFeatures: string[];
  noiseCancellation: boolean;
}

export interface ConnectionSpec {
  nfc: boolean;
  usb: string;
  wlan: string;
  bluetooth: string;
}

export interface PortsSpec {
  chargingType: string;
  headphoneJack: string | null;
}

export interface BatterySpec {
  capacity: number;
  fastCharge: boolean;
  chargingTime: string;
  dischargingTime: string;
}

export interface Ratings {
  camera: string;
  design: string;
  battery: string;
  display: string;
  performance: string;
}
