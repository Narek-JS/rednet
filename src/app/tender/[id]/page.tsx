import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/UI";
import { TenderDetails } from "./_componenets/TenderDetails";
import { ArrowLeft } from "lucide-react";

export default function SingleTender({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ selectedTender?: string }>;
}) {
  const { id } = use(params);
  const { selectedTender } = use(searchParams);

  return (
    <div className="w-full h-[calc(100vh-80px)] bg-background">
      <div className="container">
        <div className="py-8">
          <div>
            <Link href="/?type=tender">
              <Button
                className="pl-0 text-primary font-semibold text-[18px] flex gap-3 items-center"
                variant="link"
              >
                <ArrowLeft size={20} />
                Back to tenders
              </Button>
            </Link>
          </div>
          <TenderDetails id={id} selectedTender={selectedTender} />
        </div>
      </div>
    </div>
  );
}
