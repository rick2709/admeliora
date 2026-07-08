import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showWordmark?: boolean;
};

export function Logo({ className, variant = "dark", showWordmark = true }: LogoProps) {
  const textColor = variant === "dark" ? "#0B2149" : "#F7F9FC";
  const mutedColor = variant === "dark" ? "#3A4454" : "#C9D3E3";
  const iconSrc =
    variant === "dark"
      ? "/images/logo-ami-icon.png"
      : "/images/logo-ami-icon-light.png";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={iconSrc}
        alt="AD Meliora Investments logo mark"
        width={40}
        height={28}
        className="h-8 w-auto shrink-0 sm:h-9"
        priority
      />
      {showWordmark && (
        <span className="leading-tight">
          <span
            className="block font-heading font-extrabold tracking-tight text-lg"
            style={{ color: textColor }}
          >
            AD MELIORA
          </span>
          <span
            className="block text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: mutedColor }}
          >
            Investment Pvt Ltd
          </span>
        </span>
      )}
    </div>
  );
}
