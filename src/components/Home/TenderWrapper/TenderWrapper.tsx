import { SearchSection } from "../../SearchSection";
import { TenderDashboard } from "./TenderDashboard";
import { Filter } from "../../Filter";

interface TenderWrapperProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const TenderWrapper: React.FC<TenderWrapperProps> = ({ search, category, priceGte, priceLte }) => {
  return (
    <div className='container'>
      <div className='flex gap-[33px] mt-8 items-start'>
        <Filter />
        <div className='flex-1'>
          <SearchSection search={search} />
          <TenderDashboard search={search} category={category} priceGte={priceGte} priceLte={priceLte} />
        </div>
      </div>
    </div>
  );
};
