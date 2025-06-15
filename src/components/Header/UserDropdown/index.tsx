"use client";

import { User, Lock, Calendar, LogOut } from "lucide-react";
import { clearState } from "@/store/auth/slice";
import { useAppDispatch } from "@/store/hooks";
import { TEXTS } from "@/constants/texts";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React from "react";

type Props = {
  onChangePassword: () => void;
  onSubscription: () => void;
  onProfile: () => void;
  avatarUrl?: string;
};

const UserDropdown: React.FC<Props> = ({
  onChangePassword,
  onSubscription,
  onProfile,
  avatarUrl,
}) => {
  const dispatch = useAppDispatch();
  const onLogout = () => dispatch(clearState());

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="h-8 w-8 rounded-full ring-2 ring-gray-200 hover:ring-gray-300 focus:outline-none focus:ring-2 overflow-hidden cursor-pointer"
          aria-label="User menu"
        >
          {avatarUrl ? (
            <Image
              width={40}
              height={40}
              src={avatarUrl}
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            <User className="h-6 w-6 text-gray-500 m-auto" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={5}
        className="min-w-[160px] bg-white rounded-md shadow-lg p-1 z-10"
      >
        <DropdownMenu.Item
          onSelect={onProfile}
          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <User className="mr-2 h-4 w-4" /> {TEXTS.header.profile}
        </DropdownMenu.Item>

        <DropdownMenu.Item
          onSelect={onChangePassword}
          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <Lock className="mr-2 h-4 w-4" /> {TEXTS.header.changePassword}
        </DropdownMenu.Item>

        <DropdownMenu.Item
          onSelect={onSubscription}
          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <Calendar className="mr-2 h-4 w-4" /> {TEXTS.header.subscription}
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="my-1 h-px bg-gray-100" />

        <DropdownMenu.Item
          onSelect={onLogout}
          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <LogOut className="mr-2 h-4 w-4 transform rotate-180" />
          {TEXTS.header.logout}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { UserDropdown };
