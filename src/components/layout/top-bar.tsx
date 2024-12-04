import { Mail, Phone, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <div className="w-full bg-custom-primary   text-custom-background">
      <div className="flex flex-col sm:flex-row items-stretch">
        <div className="relative flex items-center  bg-custom-secondary py-2 px-4 sm:pr-8 sm:w-1/2">
          <div className="flex items-center justify-around lg:px-16 w-full  gap-2">
            <Truck className="size-4 flex-shrink-0" />
            <span className="text-right text-xs sm:text-sm">
              شحن مجاني للطلبات التي تزيد عن 199 دولارا بالإضافة إلى أفضل خدمة
              عملاء في الصناعة
            </span>
          </div>
          <div className="hidden sm:block absolute top-0 right-0 h-full w-8 bg-custom-secondary skew-x-12 origin-top-right" />
        </div>

        <div className="flex flex-wrap lg:px-16 items-center sm:justify-end justify-between gap-4 py-2 px-4 sm:w-1/2">
          <Link
            href="mailto:bintaleb@bintaleb.com"
            className="flex items-center gap-1 hover:text-custom-tertiary transition-colors text-sm"
            aria-label="Send us an email"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">bintaleb@bintaleb.com</span>
          </Link>

          <div className="h-4 w-px bg-background" aria-hidden="true" />

          <Link
            href="tel:92001334"
            className="flex items-center gap-1 hover:text-custom-tertiary transition-colors text-sm"
            aria-label="Call us"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">92001334</span>
          </Link>

          <div className="h-4 w-px bg-background" aria-hidden="true" />

          <Button
            variant="ghost"
            size="sm"
            className="hover:text-custom-tertiary hover:bg-transparent focus-visible:ring-1 focus-visible:ring-custom-tertiary text-sm"
            aria-label="Switch language to Arabic"
          >
            العربية
          </Button>
        </div>
      </div>
    </div>
  );
}
