import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type LoadingProps = {
  className?: string;
};

export const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <Loader2
      className={cn("my-28 h-16 w-16 text-primary/60 animate-spin", className)}
    />
  );
};
