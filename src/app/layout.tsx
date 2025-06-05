import { Noto_Sans_Armenian } from "next/font/google";
import { StoreProvider } from "@/store/Provider";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { ReactNode } from "react";

import classNames from "classnames";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title:
    "SmartBid - Online Auctions & Tenders in Armenia | Government & Business Listings",
  description:
    "SmartBid is Armenia's centralized platform for public and private auctions and tenders. Discover, bid, and manage listings in real-time. From vehicles to services — transparent, multilingual, and easy to use.",
};

const notoArmenian = Noto_Sans_Armenian({
  weight: ["100", "300", "400", "600", "700"],
  subsets: ["armenian"],
  display: "swap",
});

type Props = Readonly<{ children: ReactNode }>;

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          "antialiased bg-[#EFF0F6]",
          notoArmenian.className
        )}
      >
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
