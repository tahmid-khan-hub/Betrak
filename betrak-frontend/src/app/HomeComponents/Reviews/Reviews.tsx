"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { getUserReviews } from "@/lib/reviewApi";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
  const { data: allReviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getUserReviews,
  });
  const reviews = allReviews?.data?.data ?? [];
  console.log(reviews);
  return (
    <div className="px-2 py-32 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <ScrollAnimate>
          <h2 className="jakartaSans text-4xl font-bold text-gray-50">
            What Our
            <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">{" "} Users Say </span>
          </h2>
        </ScrollAnimate>
      </div>
      
    </div>
  );
};

export default Reviews;
