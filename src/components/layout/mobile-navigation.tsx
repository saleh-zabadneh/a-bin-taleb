import React from "react";
import Link from "next/link";
import { User, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden p-2" aria-label="Open menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-[300px] sm:w-[400px] bg-custom-primary text-white p-0 overflow-y-auto"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Access navigation options and user account
        </SheetDescription>
        <div className="flex flex-col h-full">
          <div className="bg-custom-secondary p-6">
            <Link
              href="/login"
              className="flex items-center gap-2 text-white hover:text-custom-tertiary transition-colors"
            >
              <User className="size-6" />
              <span className="text-lg font-semibold">
                تسجيل دخول / تسجيل حساب
              </span>
            </Link>
          </div>
          <nav className="flex-1 p-6">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.hasDropdown ? (
                    <Accordion
                      type="single"
                      collapsible
                      className="border-b border-custom-tertiary/20"
                    >
                      <AccordionItem value={item.href} className="border-none">
                        <AccordionTrigger className="hover:text-custom-tertiary transition-colors py-2 text-lg">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <li key={dropdownItem.href}>
                                <Link
                                  href={dropdownItem.href}
                                  className="block py-2 pr-4 hover:text-custom-tertiary transition-colors"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-2  hover:text-custom-tertiary transition-colors ${
                        item.active ? "font-bold" : ""
                      }`}
                    >
                      {item.label}
                      <ChevronRight className="size-5" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
