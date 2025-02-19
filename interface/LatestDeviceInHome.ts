export interface LatestDeviceInHomeData {
  success: boolean;
  message: string;
  data: Phone[];
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
}
