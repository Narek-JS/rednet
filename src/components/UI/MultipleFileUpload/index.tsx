"use client";

import { useLazySignTenderLotUploadQuery } from "@/store/tender/api";
import { useUploadFileMutation } from "@/store/uploader/api";
import { useController, Control } from "react-hook-form";
import { Trash2, Upload, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/utils/strings/cn";
import * as RadixLabel from "@radix-ui/react-label";

interface Props {
  control: Control<any>;
  classname?: string;
  label?: string;
  name: string;
}

export const MultipleFileUpload: React.FC<Props> = ({
  classname,
  control,
  label,
  name,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingIndexes, setUploadingIndexes] = useState<number[]>([]);
  const [signTenderLotUpload] = useLazySignTenderLotUploadQuery();
  const [uploadFile] = useUploadFileMutation();

  const {
    field: { value = [], onChange },
  } = useController({ name, control });

  const handleFiles = async (files: FileList | null) => {
    if (!files) return;
    const fileArray = Array.from(files);

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];

      // Only allow certain file types
      if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) {
        alert("Only .pdf, .jpg, .jpeg, .png files are allowed.");
        continue;
      }

      const index = value.length + i;
      setUploadingIndexes((prev) => [...prev, index]);

      try {
        const res = await signTenderLotUpload({ file_name: file.name });
        if (res.isSuccess) {
          await uploadFile({ url: res.data?.data.upload_url, file });

          onChange([...value, res.data?.data.file_name]);
        }
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setUploadingIndexes((prev) => prev.filter((i) => i !== index));
      }
    }
  };

  const removeFile = (index: number) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <RadixLabel.Root className="text-[#14142B] font-semibold text-[14px]">
          {label}
        </RadixLabel.Root>
      )}

      <div className="flex flex-col gap-2">
        {value?.map((fileName: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm border"
          >
            <span className="text-sm text-primary truncate max-w-[180px]">
              {fileName}
            </span>

            {uploadingIndexes.includes(index) ? (
              <Loader2
                className="ml-auto animate-spin text-gray-500"
                size={16}
              />
            ) : (
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-auto text-gray-400 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "flex items-center justify-center gap-2 border border-[#eff0f6] rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100",
            classname
          )}
        >
          <Upload size={16} /> Click to Upload
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </div>
  );
};
