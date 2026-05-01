import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md";
  showValue?: boolean;
  className?: string;
}

export function StarRating({
  rating,
  max = 5,
  size = "sm",
  showValue = false,
  className,
}: StarRatingProps) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              starSize,
              i < Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : i < rating
                ? "fill-amber-200 text-amber-400"
                : "fill-slate-100 text-slate-200"
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-ink ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
