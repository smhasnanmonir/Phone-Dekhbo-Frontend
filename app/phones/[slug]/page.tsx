import { SinglePhoneData } from "@/interface/singlePhoneResponse";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const data = await fetch(
    `http://localhost:3004/api/v1/get-phone-slug/${resolvedParams.slug}`,
    {
      cache: "force-cache",
    }
  );
  const posts: SinglePhoneData = await data.json();
  console.log("specs =>", posts?.data?.specs);
  return (
    <div>
      <h1>Hello from dynamic route.</h1>
    </div>
  );
};

export default Page;
