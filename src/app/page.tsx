import { AuctionWrapper } from "@/components/Home/AuctionWrapper";

interface SearchParams {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

interface Props {
  searchParams: Promise<SearchParams>;
}

const Home: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;

  return (
    <main className="container mt-10">
      <AuctionWrapper
        search={params.search}
        category={params.category}
        priceGte={params.priceGte}
        priceLte={params.priceLte}
      />
    </main>
  );
};

export default Home;
