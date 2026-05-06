import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-cream hover:bg-ink-soft",
  secondary: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  ghost: "bg-transparent text-ink hover:text-bronze",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs uppercase tracking-[0.18em]",
  md: "px-6 py-3 text-xs uppercase tracking-[0.18em]",
  lg: "px-8 py-4 text-sm uppercase tracking-[0.2em]",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
} & ({ href: string; type?: never } | { href?: never; type?: "button" | "submit" });

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={props.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
