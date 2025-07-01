"use client";

import { selectState } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import { UserDropdown } from "./UserDropdown";
import { useRouter } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { Menu, X } from "lucide-react";
import { AddBlock } from "./AddBlock";
import { Button, Logo } from "../UI";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const state = useAppSelector(selectState);

  const [isOpen, setIsOpen] = useState(false);

  const getStartedLink = () => {
    if (!state?.user) return "/auth/login";
    if (!state.user.is_activated) return "/auth/register?step=2";
    if (state?.missing_fields?.length) return "/auth/register?step=3";
  };

  return (
    <header className="bg-white shadow h-[80px] w-full">
      <div className="container h-full mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-5 lg:hidden">
          {getStartedLink() ? (
            <Link href={getStartedLink()!} className="lg:ml-4">
              <Button variant="primery" className="!h-[38px]">
                {TEXTS.header.getStarted}
              </Button>
            </Link>
          ) : (
            <UserDropdown
              onProfile={() => router.push(`/profile/${state?.profile?.id}`)}
              avatarUrl={
                state?.profile?.profile_photo_url || "/images/profile-photo.jpg"
              }
              onChangePassword={() => {}}
              onSubscription={() => {}}
            />
          )}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-primary cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 text-primary cursor-pointer" />
            )}
          </button>
        </div>

        <nav
          className={classNames(
            "flex-col lg:flex lg:flex-row lg:items-center gap-6 lg:gap-8 lg:static absolute top-[80px] left-0 w-full lg:w-auto p-6 lg:p-0 bg-white lg:bg-transparent shadow lg:shadow-none z-50 transition-all",
            { flex: isOpen, hidden: !isOpen }
          )}
        >
          {!!state?.profile?.id && (
            <AddBlock profileId={String(state?.profile?.id)} />
          )}

          <Link
            className="hover:text-primary transition-colors"
            href="/#contact-us"
          >
            Contact Us
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/tenders"
          >
            Tenders
          </Link>

          <div className="hidden lg:block">
            {getStartedLink() ? (
              <Button
                variant="primery"
                className="!h-[38px] lg:ml-4"
                onClick={() => router.push(`/auth/login`)}
              >
                {TEXTS.header.getStarted}
              </Button>
            ) : (
              <UserDropdown
                onProfile={() => router.push(`/profile/${state?.profile?.id}`)}
                avatarUrl={
                  state?.profile?.profile_photo_url ||
                  "/images/profile-photo.jpg"
                }
                onChangePassword={() => {}}
                onSubscription={() => {}}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export { Header };
