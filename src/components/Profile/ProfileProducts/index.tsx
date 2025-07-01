"use client";

import { useProfileProductsQuery } from "@/store/profile/api";
import { Down, EmptyItems, Plus } from "@/components/Icons";
import { useGetStateQuery } from "@/store/auth/api";
import { SECTION_TAGS } from "@/constants/sections";
import { Button, Skeleton } from "@/components/UI";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { cutWordToEtc } from "@/utils/strings";
import { ProductItem } from "./ProductItem";
import { TEXTS } from "@/constants/texts";
import { useState } from "react";
import classNames from "classnames";

interface Props {
  profileId: number;
}

const ProfileProducts: React.FC<Props> = ({ profileId }) => {
  const dispatch = useAppDispatch();
  const { data: state } = useGetStateQuery();

  const isEditable = state?.data.profile?.id === profileId;

  const [page, setPage] = useState(1);

  const { data: products, isLoading } = useProfileProductsQuery({
    profileId,
    page,
  });

  const addProduct = () => {
    dispatch(openModal({ type: "productModal", props: { profileId } }));
  };

  const seeMore = () => {
    setPage(0);
  };

  const hasMoreProducts = !!page && products && products.meta.total > 1;

  return (
    <div
      id={SECTION_TAGS.PROFILE_PRODUCTS.ID}
      className="w-full min-h-[200px] p-2.5 sm:p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4"
    >
      <h3 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
        {TEXTS.profileProducts.title}
      </h3>

      {isLoading && <Skeleton className="w-full h-[180px]" />}

      {products?.data?.map((product) => (
        <ProductItem key={product.id} product={product} profileId={profileId} />
      ))}

      {!products?.data?.length && !isLoading && (
        <EmptyItems text={TEXTS.profileProducts.empty} />
      )}

      <div
        className={classNames("w-full flex", {
          "justify-between": hasMoreProducts && isEditable,
          "justify-end": !hasMoreProducts && isEditable,
        })}
      >
        {hasMoreProducts && (
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
        )}

        {isEditable && (
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
        )}
      </div>
    </div>
  );
};

export { ProfileProducts };
