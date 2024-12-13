"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

interface FooterSection {
  title: string;
  links: { title: string; href: string; isActive?: boolean }[];
}

const sections: FooterSection[] = [
  {
    title: "روابط سريعة",
    links: [
      { title: "من نحن", href: "#", isActive: true },
      { title: "خدماتنا", href: "#" },
      { title: "منتجاتنا", href: "#" },
      { title: "تاريخنا", href: "#" },
      { title: "مكتبه", href: "#" },
    ],
  },
  {
    title: "الدعم و المساعدة",
    links: [
      { title: "الأسئلة الشائعة", href: "#" },
      { title: "تواصل معنا", href: "#", isActive: true },
      { title: "برنامج المحاكاة", href: "#" },
      { title: "معلومات الضمان", href: "#" },
      { title: "الشحن والتسليم", href: "#" },
      { title: "مركز دعم العملاء", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <Youtube className="h-5 w-5" />, href: "#", label: "Youtube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2B7D] text-white">
      <div className="container mx-auto px-4 py-16 lg:px-40">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-end lg:col-span-3 col-span-2">
            {/*Removed Image Component*/}
            <h2 className="mb-4 text-xl font-bold">إبق على تواصل</h2>
            <p className="mb-6 text-right text-sm">
              نحن في شركة بن طالب لتجهيزات المسابح نرحب بجميع استفساراتكم ونسعد
              بتقديم الدعم والمساعدة
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Collapsible Sections for Mobile, Regular for Desktop */}
          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-3">
              <h3 className="mb-6 text-right text-xl font-bold">
                {section.title}
              </h3>
              <ul className="space-y-4 text-right">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`transition-colors hover:text-blue-300 text-[#B4BCD2] flex items-center justify-end gap-2 ${
                        link.isActive ? "text-white" : ""
                      }`}
                    >
                      {link.title}
                      <span className="text-xs">{"<"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact Info */}
          <div className="flex flex-col gap-4 items-end lg:col-span-3">
            <div className="w-[90px] h-[90px] bg-custom-background-light rounded-md p-2">
              <Image
                src="/logo-footer.png"
                alt="Bin Taleb Logo"
                width={100}
                height={100}
                quality={100}
                className="mb-6 w-full h-full"
              />
            </div>

            <div className="w-full space-y-4">
              <p className="text-sm font-300">
                شركة بن طالب لتجهيزات المسابح هي شركة متخصصة في تصميم، بناء،
                وتوريد تجهيزات المسابح بمختلف أنواعها، سواء كانت مسابح سكنية،
                تجارية أو عامة.
              </p>
              <div className="flex items-center justify-end gap-3">
                <span>المملكة العربية السعودية</span>
                <div className="bg-blue-500 p-2">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span>bintaleb@bintaleb.com</span>
                <div className="bg-blue-500 p-2">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span>920013334</span>
                <div className="bg-blue-500 p-2">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-white/10">
        <div className="container mx-auto pt-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-6 text-sm">
              <Link href="#" className="transition-colors hover:text-blue-300">
                خريطة الموقع
              </Link>
              <Link href="#" className="transition-colors hover:text-blue-300">
                شروط استخدام
              </Link>
              <Link href="#" className="transition-colors hover:text-blue-300">
                الخصوصية
              </Link>
            </div>
            <p className="w-full border-t text-center justify-center  place-self-center py-6 text-custom-dark bg-white text-sm">
              © 2024 <span className="text-custom-primary-accent">بن طالب</span>{" "}
              جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
