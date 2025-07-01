import { SearchIcon } from "lucide-react";
import { TEXTS } from "@/constants/texts";
import { Input } from "@/components/UI";

const SearchTenders: React.FC = () => {
  return (
    <div className="relative">
      <SearchIcon
        className="absolute z-10 top-[12.5px] left-2"
        color="#A0A3BD"
      />
      <Input
        className="max-w-[412px] pl-10 max-h-[50px]"
        placeholder={TEXTS.search.placeholder}
      />
    </div>
  );
};

export { SearchTenders };
