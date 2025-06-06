import { AuctionWrapper } from "@/components/Home/AuctionWrapper";

interface SearchParams {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

const Home = ({searchParams}: {searchParams: SearchParams}) => {
  return (
    <main className="container mt-10">
     <AuctionWrapper
        search={searchParams.search}
        category={searchParams.category}
        priceGte={searchParams.priceGte}
        priceLte={searchParams.priceLte}
      />
    </main>
  );
};

export default Home;
