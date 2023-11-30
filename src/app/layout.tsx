import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-18-image-lightbox/style.css";
import { ModalProvider } from "@/providers/modal";
import { LangChangeHandler } from "./LangeChangeHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KenjiGinjon - A FullStack Developer",
  description:
    "I am a passionate full-stack engineer with extensive experience in web application development. Born in 1991 in Harbin, Heilongjiang, China, I have a deep interest in technological innovation and software development. ",
  generator: "KenjiGinjo",
  applicationName: "KenjiGinjo",
  referrer: "origin-when-cross-origin",
  keywords: [
    "KenjiGinjon",
    "FullStackDeveloper",
    "WebDeveloper",
    "WebDesigner",
    "WebMaster",
    "WebProgrammer",
  ],
  authors: [{ name: "KenjiGinjo", url: "https://kenjiginjo.github.io/" }],
  creator: "KenjiGinjo",
  publisher: "KenjiGinjo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <LangChangeHandler />
      <body className={inter.className}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
