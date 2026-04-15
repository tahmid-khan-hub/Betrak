"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { getUserReviews } from "@/lib/reviewApi";
import { Review } from "@/types/Review";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

const Reviews = () => {
  const { data: allReviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getUserReviews,
  });
  const reviews: Review[] = allReviews?.data?.data ?? [];

  const firstRow = reviews.slice(0, 5);
  const secondRow = reviews.slice(5, 10);

  return (
    <div className="px-2 py-32 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <ScrollAnimate>
          <h2 className="jakartaSans text-4xl font-bold text-gray-50">
            What Our
            <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">{" "}Users Say</span>
          </h2>
        </ScrollAnimate>
      </div>
      {/* first row */}
      <Marquee pauseOnHover speed={50}>
          <div className="flex gap-5 mr-5">
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <ReviewCardSkeleton key={i} />
                ))
              : firstRow.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
          </div>
        </Marquee>
        {/* Second row */}
        <Marquee pauseOnHover speed={45} direction="right" className="mt-6 gap-5 mr-5">
          <div className="flex">
            {isLoading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <ReviewCardSkeleton key={i} />
                ))
              : secondRow.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
          </div>
        </Marquee>
    </div>
  );
};

export default Reviews;
