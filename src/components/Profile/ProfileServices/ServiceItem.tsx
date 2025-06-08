import { Dropdown, DropdownItem } from "@/components/UI/Dropdown";
import { useDeleteServiceMutation } from "@/store/profile/api";
import { ProfileService } from "@/store/profile/types";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { Dots } from "@/components/Icons";
import Image from "next/image";

interface ServiceItemProps {
  onDataChange?: () => void;
  service: ProfileService;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ onDataChange, service }) => {
  const [deleteService] = useDeleteServiceMutation();
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(openModal({ type: "serviceModal" }));
  };

  const handleDelete = async () => {
    if (!service.id) return;

    try {
      const response = await deleteService(Number(service.id));

      if (!response.error) {
        onDataChange?.();
      }
    } catch (error) {
      console.error("Error deleting Service:", error);
    }
  };

  return (
    <>
      <div className="h-[1px] bg-[#D6D8E7]" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-[109px] h-[109px] rounded-[8px] relative">
            {service.photo_url && (
              <Image
                src={service.photo_url}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="rounded-[8px]"
              />
            )}
          </div>
          <div className="flex flex-col justify-center ">
            <h6 className="text-[#002366] text-[24px] font-semibold">
              {service.name}
            </h6>
            <p className="font-medium text-[#002366] text-sm">
              {service.description}
            </p>
          </div>
        </div>

        {true && ( // isEditable
          <Dropdown trigger={<Dots />}>
            <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
            <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
          </Dropdown>
        )}
      </div>
    </>
  );
};

export { ServiceItem };
