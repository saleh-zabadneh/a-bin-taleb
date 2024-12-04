import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "/", label: "الرئيسية", active: true },
  { href: "/history", label: "تاريخنا" },
  {
    href: "/services",
    label: "خدماتنا",
    hasDropdown: true,
    dropdownItems: [
      { href: "/services/1", label: "خدمة 1" },
      { href: "/services/2", label: "خدمة 2" },
      { href: "/services/3", label: "خدمة 3" },
    ],
  },
  { href: "/projects", label: "مشاريعنا" },
  { href: "/products", label: "منتجات" },
  { href: "/library", label: "المكتبة" },
];

export default function Navigation() {
  return (
    <nav className="w-full absolute -top-8 bg-custom-primary text-white hidden lg:block">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/login"
          className="flex items-center gap-2 hover:text-custom-tertiary"
        >
          <User className="size-5" />
          تسجيل دخول / تسجيل حساب
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-custom-tertiary">
                    {item.label}
                    <ChevronDown className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.href}>
                        <Link href={dropdownItem.href} className="w-full">
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-2  hover:text-custom-tertiary",
                    item.active && "font-bold"
                  )}
                >
                  {item.label}
                  {item.active && (
                    <span className="absolute mt-1 bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-background" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
