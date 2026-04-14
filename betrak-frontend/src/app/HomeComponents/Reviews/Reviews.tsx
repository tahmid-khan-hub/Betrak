"use client"
import { getUserReviews } from "@/lib/reviewApi";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
    const { data: allReviews, isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: getUserReviews
    })
    const reviews = allReviews?.data?.data ?? [];
    return (
        <div>
            
        </div>
    );
};

export default Reviews;