import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "react-18-image-lightbox/style.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { languages } from "../../i18n/settings";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
  params: { lang },
}: KG.APP.BASE.ClientSideProps) {
  return (
    <html>
      <body className={inter.className}>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
        <SpeedInsights />
      </body>
    </html>
  );
}
