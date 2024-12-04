import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNavigation from "./mobile-navigation";

export default function MiddleHeader() {
  return (
    <div className="w-full bg-custom-background pb-4">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <MobileNavigation />
          <button
            className="rounded-full bg-custom-secondary p-2 text-white hover:bg-custom-secondary/90"
            aria-label="Search"
          >
            <Search className="size-5" />
          </button>
          <Link
            href="/cart"
            className="relative rounded-full bg-custom-secondary p-2 text-white hover:bg-custom-primary/90"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="size-5" />
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-custom-primary text-xs font-bold">
              0
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-none border-custom-secondary text-custom-secondary hover:bg-custom-secondary hover:text-white"
            >
              برنامج المحاكاة
            </Button>
            <Button className="rounded-none bg-custom-secondary text-white hover:bg-custom-secondary/90">
              تواصل معنا
            </Button>
          </div>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Bin Taleb Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
          />
        </Link>
      </div>
    </div>
  );
}
