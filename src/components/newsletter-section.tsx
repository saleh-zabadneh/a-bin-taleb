"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }
  return (
    <section className="relative overflow-hidden max-h-[302px] ">
      <div className="container mx-auto px-4 lg:px-40">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8  ">
          {/* Form Section */}
          <div className="flex flex-col justify-center space-y-6 py-16 text-right">
            <h2 className="text-4xl font-bold text-custom-dark-veryDark">
              اشترك في النشرة الإخبارية لدينا
            </h2>
            <p className="text-custom-dark-light leading-relaxed max-w-xl">
              انضم إلى مجتمع بن طالب وافتح امتيازات حصرية مصممة خصيصا للارتقاء
              بتجربة حمام السباحة الخاص بك.
            </p>
            <div className="flex gap-4 mt-4 flex-col sm:flex-row">
              <Button className="bg-blue-500 rounded-none hover:bg-blue-600 text-white px-8 py-6 text-lg">
                اشترك الآن
              </Button>
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 rounded-none text-right py-6 text-lg border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-h-[302px] max-w-[417px]">
            <Image
              src="/sawna.png"
              alt="Luxury pool with sun loungers"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
