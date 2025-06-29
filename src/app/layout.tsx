import { ModalController, ToastProvider } from "@/components/UIControllers";
import { Noto_Sans_Armenian } from "next/font/google";
import { StoreProvider } from "@/store/Provider";
import { StorageEnum } from "@/types/storage";
import { Header } from "@/components/Header";
import { ENDPOINTS_ENUM } from "@/constants";
import { getCookie } from "@/utils/cookies";
import { State } from "@/store/auth/types";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { api } from "@/utils/api";

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

const RootLayout: React.FC<Props> = async ({ children }) => {
  const state = await api.get<State>(ENDPOINTS_ENUM.STATE);
  const token = (await getCookie(StorageEnum.ACCESS_TOKEN)) as string;

  return (
    <html lang="en">
      <body
        className={classNames(
          "antialiased bg-[#FCFCFC]",
          notoArmenian.className
        )}
      >
        <StoreProvider
          preloadedState={{ auth: { state: state.result, token } }}
        >
          <ToastProvider>
            <ModalController />
            <Header />
            {children}
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
