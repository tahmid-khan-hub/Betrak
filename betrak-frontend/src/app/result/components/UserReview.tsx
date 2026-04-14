"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const UserReview = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => submitReview(rating, comment),
    onSuccess: () => setSubmitted(true),
    onError: (error: Error) => alert(error.message),
  })

  const handleSubmit = () => {
    if(rating === 0) return alert("Please select a rating.")
    if (!comment.trim()) return alert("Please write a comment.");
    mutate();
  }

  if (submitted) {
    return (
      <ScrollAnimate delay={0.4}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 px-8 py-12 mt-24 text-center">
          <p className="text-2xl font-bold text-gray-50 jakartaSans">Thank you for your feedback! </p>
          <p className="mt-2 text-sm text-gray-400">Your review helps us improve Betrak for everyone.</p>
        </div>
      </ScrollAnimate>
    );
  }

  return (
    <ScrollAnimate delay={0.4}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 px-8 py-10 text-center mt-24">
            {/* Header */}
            <h3 className="jakartaSans text-2xl font-bold text-gray-50">Help Us Improve</h3>
            <p className="mt-2 text-sm text-gray-400">Your feedback helps refine our AI wellness models.</p>

            {/* stars */}
            <div className="mt-6 flex justify-center gap-2">
                {[1,2,3,4,5].map((star) => (
                    <Button key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    className="transition-transform hover:scale-110"
                    >
                        <FaStar size={28} className="transition-colors duration-150" color={(hovered || rating) >= star ? "#f59e0b" : "#374151"}
                        />
                    </Button>
                ))}
            </div>

            {/* Textarea */}
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us more about your assessment experience..."
                rows={4}
                className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 resize-none"
            />

            {/* Submit */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={isPending}
                className="mt-4 w-full rounded-xl bg-indigo-500/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600/70 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isPending ? "Submitting..." : "Submit Feedback"}
            </button>
        </div>
    </ScrollAnimate>
  );
};

export default UserReview;
