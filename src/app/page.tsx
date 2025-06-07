import { AuctionWrapper } from "@/components/Home/AuctionWrapper";
// import type { PageProps } from "next";

// interface SearchParams {
//   search?: string;
//   category?: string;
//   priceGte?: string;
//   priceLte?: string;
// }

interface Props {
  searchParams: Promise<{ search?: string; category?: string; priceGte?: string, priceLte?: string }>;
}
const Home = async ({ searchParams }: Props ) => {
  const searchParamsStream = await searchParams;
  
  return (
    <main className="container mt-10">
      <AuctionWrapper
        search={searchParamsStream.search}
        category={searchParamsStream.category}
        priceGte={searchParamsStream.priceGte}
        priceLte={searchParamsStream.priceLte}
      />
    </main>
  );
};

export default Home;
