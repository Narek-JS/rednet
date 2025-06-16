import { useDeleteServiceMutation } from "@/store/profile/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProfileService } from "@/store/profile/types";
import { selectState } from "@/store/auth/selectors";
import { openModal } from "@/store/modal/slice";
import { Dots } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

interface ServiceItemProps {
  service: ProfileService;
  profileId: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ profileId, service }) => {
  const state = useAppSelector(selectState);
  const dispatch = useAppDispatch();

  const [deleteService] = useDeleteServiceMutation();

  const handleEdit = () => {
    dispatch(
      openModal({ type: "serviceModal", props: { profileId, service } })
    );
  };

  const handleDelete = async () => {
    if (!service.id) return;

    try {
      await deleteService(Number(service.id));
    } catch (error) {
      console.error("Error deleting Service:", error);
    }
  };

  return (
    <>
      <div className="h-[1px] bg-[#dee6f094]" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="min-w-[85px] w-[85px] sm:w-[109px] min-h-[85px] h-[85px] sm:h-[109px] rounded-[8px] relative">
            {service.photo_url && (
              <Image
                src={service.photo_url}
                alt={service.name}
                className="rounded-[8px]"
                objectFit="cover"
                layout="fill"
              />
            )}
          </div>
          <div className="flex flex-col justify-center ">
            <h6 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
              {service.name}
            </h6>
            <p className="font-medium text-[#002366] text-[12px] sm:text-sm">
              {service.description}
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
                {TEXTS.serviceItem.edit}
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onSelect={handleDelete}
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                {TEXTS.serviceItem.delete}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </div>
    </>
  );
};

export { ServiceItem };
