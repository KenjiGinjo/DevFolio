"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const LangChangeHandler = () => {
  const { lang } = useParams();
  useEffect(() => {
    if (lang) {
      document.documentElement.setAttribute("lang", lang as string);
    } else {
      document.documentElement.setAttribute("lang", "en");
    }
  }, [lang]);
  return null;
};
