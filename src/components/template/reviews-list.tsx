"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { getTestimonials } from "@/service/Testimonial";
import { useQuery } from "@tanstack/react-query";

export default function ReviewsList() {
  const { data: reviews, isFetching } = useQuery({
    queryKey: ["GET - TESTIMONIALS"],
    queryFn: getTestimonials,
  });

  if (isFetching) return <p>Loading...</p>;

  const highlightedReviews = reviews?.data.filter(
    (review) => review.is_featured === true
  );

  console.log(reviews);

  return (
    <React.Fragment>
      {highlightedReviews?.map((review) => (
        <div
          key={review.id}
          className="w-full p-5 bg-gradient-to-r my-4 from-[#FF5858] to-[#F09819] rounded-lg"
        >
          <h1 className="text-base subpixel-antialiased font-bold text-white md:text-lg">
            &quot; {review.message} &quot;
          </h1>
          <div className="flex items-center justify-between pt-8 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full">
                <Image
                  src={review.avatar_url}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                  quality={100}
                  priority
                />
              </div>
              <div>
                <p className="text-base font-semibold">{review.name}</p>
                <span className="text-sm font-light">{review.profession}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              className="border border-white rounded-full md:text-base"
            >
              Learn More
            </Button>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
        {reviews?.data
          .filter((review) => review.is_featured === false)
          .map((review) => (
            <div key={review.id} className="w-full p-5 border rounded-lg">
              <h1 className="text-base font-bold subpixel-antialiased md:text-lg">
                &quot; {review.message} &quot;
              </h1>
              <div className="flex items-center justify-between pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full">
                    <Image
                      src={review.avatar_url}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      quality={100}
                      priority
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">{review.name}</h1>
                    <span className="text-sm font-light">
                      {review.profession}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="border rounded-full border-stone-900 md:text-base"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
