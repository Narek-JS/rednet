"use client";

import { selectState } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import { Button, Logo } from "../UI";

import Link from "next/link";

const Header: React.FC = () => {
  const state = useAppSelector(selectState);

  return (
    <div className="bg-[#FFFFFF] shadow h-[80px] w-full">
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center gap-8 text-[#14142B]">
              <li>
                <Link href="/auction">New Auction</Link>
              </li>
              <li>
                <Link href="/tender">New Tender</Link>
              </li>
              <li>
                <Link href="/">Auction</Link>
              </li>
              <li>
                <Link href="/?type=tender">Tender</Link>
              </li>
              <li>
                <Link
                  href={state?.profile?.slug || `profile/${state?.profile?.id}`}
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link href="/auth/register">
                  <Button variant="primery">Get started</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Header };
