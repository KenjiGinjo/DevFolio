"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";

interface AuthClientButtonProps {
  loading?: boolean;
  text: string;
  icon: React.ReactNode;
}

export function ClientButton({
  text,
  icon,
  loading = false,
}: AuthClientButtonProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <button
      type="submit"
      className={cn(buttonVariants({ variant: "outline" }), "w-full")}
      onClick={(e) => {
        if (isLoading || loading) {
          e.preventDefault();
        }
        setIsLoading(true);
      }}
    >
      {isLoading || loading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        icon
      )}
      Sign in with {text}
    </button>
  );
}
