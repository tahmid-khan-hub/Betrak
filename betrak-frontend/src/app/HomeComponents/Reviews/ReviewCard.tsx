"use client"
import { Review } from "@/types/Review";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-gray-900 text-white p-5 w-72 shrink-0 rounded-2xl shadow-md border border-gray-800 ">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={review.user_image || "/default_user.png"}
          alt={review.user_name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h4 className="font-semibold">{review.user_name}</h4>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3 text-yellow-400">
        {Array.from({ length: review.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Comment */}
      <p className="text-sm text-gray-300">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
