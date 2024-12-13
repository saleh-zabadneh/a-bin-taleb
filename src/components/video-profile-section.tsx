"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "بوابة الابتكار وتحقيق الأهداف",
    description:
      "عمليات تخطيط وتصميم وبناء مسابح للاستخدام الشخصي أو العام. تتطلب هذه المشاريع العمل على مجموعة من المراحل لضمان إنشاء مسبح آمن وجميل يلبي احتياجات المستخدمين",
    features: [
      "موازنة كيميائية للمياه",
      "خدمات شاملة",
      "اسعار معقولة",
      "حالة المياه الآمنة",
      "خدمة سريعة وموثوقة",
      "اعمال حمامات السباحة التجارية",
    ],
  },
  {
    id: 2,
    title: ". الابتكار وتحقيق الأهداف",
    description:
      "عمليات تخطيط وتصميم وبناء مسابح للاستخدام الشخصي أو العام. تتطلب هذه المشاريع العمل على مجموعة من المراحل لضمان إنشاء مسبح آمن وجميل يلبي احتياجات المستخدمين",
    features: [
      "موازنة كيميائية للمياه",
      "خدمات شاملة",
      "اسعار معقولة",
      "حالة المياه الآمنة",
      "خدمة سريعة وموثوقة",
      "اعمال حمامات السباحة التجارية",
    ],
  },
];

const videos = [
  { id: 1, thumbnail: "/sawna.png", videoUrl: "/video-1.mp4" },
  { id: 2, thumbnail: "/sawna.png", videoUrl: "/video-2.mp4" },
  { id: 3, thumbnail: "/sawna.png", videoUrl: "/video-3.mp4" },
  { id: 4, thumbnail: "/sawna.png", videoUrl: "/video-3.mp4" },
  { id: 5, thumbnail: "/sawna.png", videoUrl: "/video-3.mp4" },
];

export default function VideoProfileSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-40 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Section */}
        <div className="relative">
          {/* Main Video */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src={activeVideo.thumbnail}
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-500 border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-w-[564px] mx-auto mt-4">
            {videos.map((video) => (
              <div
                key={video.id}
                // h-20
                className={`relative aspect-video cursor-pointer  overflow-hidden ${
                  activeVideo.id === video.id ? "ring-4 ring-blue-500" : ""
                }`}
                onClick={() => setActiveVideo(video)}
              >
                <Image
                  src={video.thumbnail}
                  alt={`Video thumbnail ${video.id}`}
                  fill
                  className="object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-end py-12">
          <div className="flex flex-col items-end mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-8 bg-blue-500" />
              <span className="text-blue-500 font-medium">المشاريع</span>
            </div>
            <h2 className="text-4xl font-bold text-right mb-4">
              {projects[activeProject].title}
            </h2>
            <p className="text-gray-600 text-right leading-relaxed mb-8">
              {projects[activeProject].description}
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              {projects[activeProject].features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="rounded-full px-4 py-1 border-blue-500 text-blue-500"
                >
                  <Check className="w-4 h-4 ml-2" />
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex items-center justify-between w-full gap-4 mt-auto">
            <Button className="bg-blue-500 hover:bg-blue-600">
              كل المشاريع
            </Button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    activeProject === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
