"use client";

import { useProfileProductsQuery } from "@/store/profile/api";
import { Down, EmptyItems, Plus } from "@/components/Icons";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { cutWordToEtc } from "@/utils/strings";
import { ProductItem } from "./ProductItem";
import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";
import { useState } from "react";

interface Props {
  profileId: number;
}

const INITIAL_PRODUCTS_LIMIT = 3;

const ProfileProducts: React.FC<Props> = ({ profileId }) => {
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(INITIAL_PRODUCTS_LIMIT);

  const { data: products } = useProfileProductsQuery({ profileId, limit });

  const addProduct = () => {
    dispatch(openModal({ type: "productModal", props: { profileId } }));
  };

  const seeMore = () => {
    setLimit(limit + 2);
  };

  return (
    <div className="w-full min-h-[200px] p-2.5 sm:p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
      <h3 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
        {TEXTS.profileProducts.title}
      </h3>

      {products?.data?.map((product) => (
        <ProductItem key={product.id} product={product} profileId={profileId} />
      ))}

      {!products?.data?.length && (
        <EmptyItems text={TEXTS.profileProducts.empty} />
      )}

      <div className="w-full flex justify-between">
        <Button
          className="max-w-fit text-primary text-[12px] sm:text-[16px] font-normal flex items-center gap-1"
          onClick={seeMore}
          variant="link"
        >
          <span className="hidden sm:inline">
            {TEXTS.profileProducts.seeMore}
          </span>
          <span className="inline sm:hidden">
            {cutWordToEtc(TEXTS.profileProducts.seeMore, 17)}
          </span>
          <Down />
        </Button>

        <Button
          variant="link"
          className="max-w-fit text-primary text-[14px] sm:text-[16px] flex items-center gap-1"
          onClick={addProduct}
        >
          <Plus fill="#F35D74" fillOpacity="1" />
          <span className="hidden sm:inline">
            {TEXTS.profileProducts.addProduct}
          </span>
          <span className="inline sm:hidden">
            {cutWordToEtc(TEXTS.profileProducts.addProduct, 12)}
          </span>
        </Button>
      </div>
    </div>
  );
};

export { ProfileProducts };
