import { useDeleteProductMutation } from "@/store/profile/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProfileProduct } from "@/store/profile/types";
import { selectState } from "@/store/auth/selectors";
import { openModal } from "@/store/modal/slice";
import { Dots } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

interface ProductItemProps {
  product: ProfileProduct;
  profileId: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ profileId, product }) => {
  const state = useAppSelector(selectState);
  const dispatch = useAppDispatch();

  const [deleteProduct] = useDeleteProductMutation();

  const handleEdit = () => {
    dispatch(
      openModal({ type: "productModal", props: { profileId, product } })
    );
  };

  const handleDelete = async () => {
    if (!product.id) return;

    try {
      await deleteProduct(Number(product.id));
    } catch (error) {
      console.error("Error deleting Product:", error);
    }
  };

  return (
    <>
      <div className="h-[1px] bg-[#dee6f094]" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="sn:w-[109px] w-[85px] sn:h-[109px] h-[85px] rounded-[8px] relative">
            {product.photo_url && (
              <Image
                src={product.photo_url}
                alt={product.name}
                className="rounded-[8px]"
                objectFit="cover"
                layout="fill"
              />
            )}
          </div>
          <div className="flex flex-col justify-center ">
            <h6 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
              {product.name}
            </h6>
            <p className="font-medium text-[#002366] text-[12px] sm:text-sm">
              {product.description}
            </p>
          </div>
        </div>

        {state?.profile?.id === profileId && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Dots className="cursor-pointer" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              align="end"
              sideOffset={5}
              className="min-w-[160px] bg-white rounded-md shadow-lg p-1"
            >
              <DropdownMenu.Item
                onSelect={handleEdit}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                {TEXTS.productItem.edit}
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onSelect={handleDelete}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                {TEXTS.productItem.delete}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </div>
    </>
  );
};

export { ProductItem };
