import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CarouselDots({
  slides,
  activeIndex,
  onDotClick,
}: {
  slides: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: slides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            "rounded-full bg-white/40 transition-all duration-300",
            activeIndex === index ? "w-3 h-3" : "w-2 h-2"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-colors"
      style={{ [direction]: "4rem" }}
      aria-label={`Go to ${direction === "left" ? "previous" : "next"} slide`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-6 h-6 text-white" />
      ) : (
        <ChevronRight className="w-6 h-6 text-white" />
      )}
    </button>
  );
}
