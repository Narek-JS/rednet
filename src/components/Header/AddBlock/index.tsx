"use client";

import { Dropdown, DropdownItem } from "@/components/UI";
import { SECTION_TAGS } from "@/constants/sections";
import { ChevronDownIcon } from "lucide-react";
import { Plus } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";

import Link from "next/link";
import React from "react";
import { TenderIcon } from "@/components/UI/TenderIcon";
import { ProductIcon } from "@/components/UI/ProductIcon";
import { ServiceIcon } from "@/components/UI/ServiceIcon";

interface Props {
  profileId: string;
}

const AddBlock: React.FC<Props> = ({ profileId }) => (
  <Dropdown
    trigger={
      <button className="flex items-center gap-1 font-normal text-gray-700 hover:text-primary transition-colors px-0 py-0 bg-transparent border-none shadow-none focus:outline-none cursor-pointer">
        {TEXTS.addBlock.add}
        <ChevronDownIcon className="w-4 h-4 ml-1" />
      </button>
    }
    className="min-w-[200px] bg-white border border-gray-100 shadow-lg rounded-lg mt-3"
    align="left"
  >
    <DropdownItem className="text-gray-700 hover:bg-[#EFF0F6] transition-colors">
      <Link
        href={SECTION_TAGS.PROFILE_SERVICES.getProfileServiceTagUrl(profileId)}
        className="flex justify-between items-center gap-2 w-full h-[28px]"
      >
        <div className="flex items-center gap-2">
          <ServiceIcon />
          <span>{TEXTS.addBlock.service}</span>
        </div>
        <Plus className="w-4 h-4 text-primary" />
      </Link>
    </DropdownItem>

    <DropdownItem className="text-gray-700 hover:bg-[#EFF0F6] transition-colors">
      <Link
        href={SECTION_TAGS.PROFILE_PRODUCTS.getProfileProductsTagUrl(profileId)}
        className="flex justify-between items-center gap-2 w-full h-[28px]"
      >
        <div className="flex items-center gap-2">
          <ProductIcon />
          <span>{TEXTS.addBlock.product}</span>
        </div>
        <Plus className="w-4 h-4 text-primary" />
      </Link>
    </DropdownItem>

    <DropdownItem className="text-gray-700 hover:bg-[#EFF0F6] transition-colors">
      <Link
        href="/tenders/create"
        className="flex justify-between items-center gap-2 w-full h-[28px]"
      >
        <div className="flex items-center gap-2">
          <TenderIcon />
          <span>{TEXTS.addBlock.tender}</span>
        </div>
        <Plus className="w-4 h-4 text-primary" />
      </Link>
    </DropdownItem>
  </Dropdown>
);

export { AddBlock };
