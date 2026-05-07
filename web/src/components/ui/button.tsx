import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "primary-light"
  | "secondary-light";
type ButtonSize = "sm" | "md" | "lg";

const baseStyles =
  "group/btn inline-flex items-center justify-center gap-3 font-sans font-medium transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

/**
 * Button system for CW&D — editorial / hairline aesthetic.
 *
 * - primary         : bronze hairline border on ivory bg. Fills bronze on hover.
 * - secondary       : muted-green hairline. Fills green on hover.
 * - primary-light   : ivory hairline border on dark bg. Fills ivory on hover.
 * - secondary-light : low-opacity ivory hairline. For tertiary actions on dark.
 * - ghost           : text-only with bronze hover. For inline links.
 */
const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-bronze text-green bg-transparent hover:bg-bronze hover:text-ivory hover:border-bronze",
  secondary:
    "border border-green/30 text-green bg-transparent hover:border-green hover:bg-green hover:text-ivory",
  "primary-light":
    "border border-ivory/80 text-ivory bg-transparent hover:bg-ivory hover:text-green hover:border-ivory",
  "secondary-light":
    "border border-ivory/30 text-ivory bg-transparent hover:border-ivory/80 hover:text-ivory",
  ghost: "text-current hover:text-bronze",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.22em]",
  md: "px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em]",
  lg: "px-10 py-4 text-xs uppercase tracking-[0.24em]",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /**
   * Show an animated right arrow after the label (default: true).
   * Pass `false` for buttons where the arrow doesn't suit the action
   * (e.g. "Send" on a form, or in a pure phone-call ghost link).
   */
  withArrow?: boolean;
  children: React.ReactNode;
} & ({ href: string; type?: never } | { href?: never; type?: "button" | "submit" });

export function Button({
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  // Ghost variant: drop the border + arrow, behave like an inline link
  const isGhost = variant === "ghost";

  const content = (
    <>
      <span>{children}</span>
      {withArrow && !isGhost && (
        <span
          aria-hidden
          className="text-base leading-none inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={props.type ?? "button"} className={classes}>
      {content}
    </button>
  );
}
