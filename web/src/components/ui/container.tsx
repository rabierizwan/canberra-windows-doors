import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
};

/**
 * Centered max-width container with consistent horizontal padding.
 * Use this on every page section so widths stay aligned.
 */
export function Container({ className, children, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
