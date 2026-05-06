import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "primary-light" | "secondary-light";
type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

/**
 * - primary         : green button on ivory bg
 * - secondary       : outlined green on ivory bg
 * - primary-light   : ivory button on green bg
 * - secondary-light : outlined ivory on green bg
 * - ghost           : text-only with bronze underline accent
 */
const variants: Record<ButtonVariant, string> = {
  primary: "bg-green text-ivory hover:bg-green-soft",
  secondary: "bg-transparent text-green border border-green/40 hover:border-green hover:bg-green hover:text-ivory",
  "primary-light": "bg-ivory text-green hover:bg-ivory-warm",
  "secondary-light": "bg-transparent text-ivory border border-ivory/40 hover:border-ivory hover:bg-ivory hover:text-green",
  ghost: "bg-transparent text-current hover:text-bronze",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.22em]",
  md: "px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.22em]",
  lg: "px-9 py-4.5 text-xs uppercase tracking-[0.24em]",
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
