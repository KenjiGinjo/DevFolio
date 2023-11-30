"use client";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import SwitchLang from "@/dictionaries/SwitchLang";

import { useParams, useRouter, usePathname } from "next/navigation";
type Props = {
  lang: any;
};
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();

  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => {
          if (!lang) {
            router.push("/");
          } else {
            router.push(`/${lang}`, { scroll: false });
          }
        }}
      >
        <Image
          src={"/avatar.jpg"}
          width={32}
          height={32}
          alt="A photo of Kenji"
          style={{
            border: "1px solid #ddd",
            borderRadius: "0.5rem",
            marginRight: "0.7rem",
          }}
        />
        <div style={{ fontSize: "1.1rem" }}>
          {!lang ? "Kenji Ginjo" : "银城贤志"}
        </div>
      </div>
      <div
        style={{
          cursor: "pointer",
          width: "1.5rem",
          height: "1.5rem",
          display: "flex",
          backgroundColor: "#000",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          borderRadius: "0.2rem",
        }}
        onClick={() => {
          if (lang) {
            router.push(
              `${pathname.replace(lang as string, "").replace("//", "/")}`,
              {
                scroll: false,
              }
            );
          } else {
            router.push(`/zh-CN${pathname}`, { scroll: false });
          }
        }}
      >
        {lang ? "En" : "简"}
      </div>
    </nav>
  );
}
