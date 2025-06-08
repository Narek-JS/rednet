import { X } from "lucide-react";

interface Props {
  closeModal: () => void;
}

const ProfileEdit: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <X
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
      />
      <h2 className="text-[48px] font-bold">Profile information</h2>
    </div>
  );
};

export { ProfileEdit };
// title --> "Profile information"
