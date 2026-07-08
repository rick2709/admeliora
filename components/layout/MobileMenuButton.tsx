"use client";

import { cn } from "@/lib/utils";

type MobileMenuButtonProps = {
  open: boolean;
  onClick: () => void;
  dark?: boolean;
};

export function MobileMenuButton({ open, onClick, dark }: MobileMenuButtonProps) {
  const barColor = open || dark ? "bg-navy" : "bg-white";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
    >
      <span className="relative flex h-4 w-6 flex-col justify-between">
        <span
          className={cn(
            "h-0.5 w-full rounded-full transition-all duration-300",
            barColor,
            open && "translate-y-[7px] rotate-45"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-full rounded-full transition-all duration-300",
            barColor,
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-full rounded-full transition-all duration-300",
            barColor,
            open && "-translate-y-[7px] -rotate-45"
          )}
        />
      </span>
    </button>
  );
}
