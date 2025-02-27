import { SinglePhoneData } from "@/interface/singlePhoneResponse";

const Rating = ({ device }: { device: SinglePhoneData }) => {
  const getBarColor = (rating: number): string => {
    if (rating < 5) {
      return "bg-red-500";
    } else if (rating >= 5 && rating < 8) {
      return "bg-orange-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <div className="py-[20px]">
      <h1 className="text-2xl font-semibold decoration-blue-400 underline underline-offset-8">
        Our Ratings
      </h1>
      <div className="grid grid-cols-4 gap-4 pt-[20px]">
        {Object.entries(device?.data?.specs?.[0]?.ratings).map(
          ([category, ratings]) => (
            <div
              key={category}
              className="border p-2 bg-blue-50 hover:cursor-pointer transition-all duration-150 ease-in-out hover:bg-blue-100"
            >
              <div className="flex justify-between">
                <span className="text-sm capitalize">{category}</span>
                <span className="text-sm">{ratings} / 10</span>
              </div>
              <div className="relative w-full h-2 bg-gray-300 mt-2">
                <div
                  className={`h-full ${getBarColor(ratings)}`}
                  style={{ width: `${(ratings / 10) * 100}%` }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Rating;
