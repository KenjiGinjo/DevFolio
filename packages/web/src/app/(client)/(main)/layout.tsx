import Link from "next/link";

import { clientConfig } from "@/config/client";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { auth } from "@/auth";
import { SignOut } from "@/components/auth/server-wrap";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await auth();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-16 items-center justify-between py-6">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Homepage"
          >
            <Icons.logo />
            <span className="font-bold sm:inline-block">{siteConfig.name}</span>
          </Link>
          <div className="flex items-center">
            <MainNav items={clientConfig.mainNav} />
            {session?.user && (
              <SignOut>
                <button type="submit">logout</button>
              </SignOut>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
