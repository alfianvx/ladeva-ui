"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: TPortofolio[] | undefined;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);

  // Create multiple copies of items to ensure seamless looping
  const getLoopedItems = () => {
    if (!items || items.length === 0) return [];

    // Calculate how many copies we need for seamless loop
    const minItemsNeeded = 8; // Minimum items needed for smooth scrolling
    const copies = Math.ceil(minItemsNeeded / items.length);

    // Create multiple copies of the array
    const loopedItems = [];
    for (let i = 0; i < copies; i++) {
      loopedItems.push(...items);
    }

    return loopedItems;
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone all items for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {getLoopedItems().map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="cursor-pointer flex-shrink-0"
          >
            <div className="w-80 h-60 md:w-96 md:h-72 relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={item.thumbnail_url}
                alt={`${item.name || "Portfolio item"} - Project showcase`}
                className="object-cover transition-transform duration-300 hover:scale-105"
                fill
                sizes="(max-width: 768px) 8 40px, 768px"
                quality={100}
                loading={index < 4 ? "eager" : "lazy"} // Load first 4 eagerly, rest lazily
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAAMBAQEBAAAAAAAAAAAAAAABAhEDITES/9oADAMBAAIRAxEAPwC9jLBqr2OcUtJqNyJ3l3x7PkOceR/HO2kd13V9nnCLcffnUzrIe1G8mUWd+fUYEJHn7f0M4uxOHy"
              />
              {/* Optional: Add overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
