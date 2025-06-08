import { AuctionWrapper } from "@/components/Home/AuctionWrapper/AuctionWrapper";
import { TenderWrapper } from "@/components/Home/TenderWrapper/TenderWrapper";

interface SearchParams {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
  type?: string;
}

interface Props {
  searchParams: Promise<SearchParams>;
}

const Home: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;

  return (
    <main className="container mt-10">
      {params.type === 'tender' ? (
        <TenderWrapper
          search={params.search}
          category={params.category}
          priceGte={params.priceGte}
          priceLte={params.priceLte}
        />
      ):
        <AuctionWrapper
          search={params.search}
          category={params.category}
          priceGte={params.priceGte}
          priceLte={params.priceLte}
      />
      }
    </main>
  );
};

export default Home;
