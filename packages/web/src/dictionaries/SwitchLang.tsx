"use client";

import { useParams, useRouter, usePathname } from "next/navigation";

export default function SwitchLang() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();
  return (
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
  );
}
