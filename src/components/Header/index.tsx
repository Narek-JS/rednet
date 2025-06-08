"use client";

import { selectState } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import { Menu, X } from "lucide-react";
import { Button, Logo } from "../UI";
import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const state = useAppSelector(selectState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow h-[80px] w-full">
      <div className="container h-full mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-6 lg:gap-8 lg:static absolute top-[80px] left-0 w-full lg:w-auto p-6 lg:p-0 bg-white lg:bg-transparent shadow lg:shadow-none z-50 transition-all`}
        >
          <Link href="/auction">New Auction</Link>
          <Link href="/tender">New Tender</Link>
          <Link href="/">Auction</Link>
          <Link href="/?type=tender">Tender</Link>
          <Link href={state?.profile?.slug || `/profile/${state?.profile?.id}`}>
            Profile
          </Link>
          <Link href="/auth/register" className="lg:ml-4">
            <Button variant="primery">Get started</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { Header };
