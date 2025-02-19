interface PhoneSpecs {
  id: number;
  phoneId: number;
  network: string;
  body: {
    sim: string;
    build: string;
    weight: number;
    dimensions: string;
  };
  display: {
    size: number;
    colors: string;
    features: string[];
    brightness: string;
    protection: string;
    resolution: string;
    aspectRatio: string;
    displayType: string;
    contrastRatio: string;
  };
  os: string;
  chipset: {
    gpu: string;
    model: string;
    coprocessor: string;
    architecture: string;
    manufacturer: string;
  };
  memory: {
    external: string | null;
    internal: string;
  };
  camera: {
    lens: string;
    main: string;
    other: string;
    photo: string[];
    video: string[];
    features: string[];
    telephoto: string;
    ultrawide: string;
  };
  sound: {
    microphone: boolean | string;
    speakerType: string;
    audioFeatures: string[];
    noiseCancellation: boolean | string;
  };
  connection: {
    nfc: boolean | string;
    usb: string;
    wlan: string;
    bluetooth: string;
  };
  ports: {
    chargingType: string;
    headphoneJack: string | null;
  };
  battery: {
    capacity: number;
    fastCharge: boolean | string;
    chargingTime: string;
    dischargingTime: string;
  };
  colors: string;
  pros: string[];
  cons: string[];
  ratings: {
    camera: string;
    design: string;
    battery: string;
    display: string;
    performance: string;
  };
}

interface Phone {
  id: number;
  status: string;
  brand: string;
  model: string;
  image: string;
  releaseDate: string;
  price: number;
  slug: string;
  specs: PhoneSpecs[];
}

export interface phoneDataResponse {
  success: boolean;
  message: string;
  data: Phone[];
}
