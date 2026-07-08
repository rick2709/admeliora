import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showWordmark?: boolean;
};

export function Logo({ className, variant = "dark", showWordmark = true }: LogoProps) {
  const textColor = variant === "dark" ? "#0B2149" : "#ffffff";
  const mutedColor = variant === "dark" ? "#2E5AAC" : "#a9bce0";
  const iconSrc =
    variant === "dark" ? "/images/logo-ami-icon.png" : "/images/logo-ami-icon-light.png";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={iconSrc}
        alt="AD Meliora Investments logo mark"
        width={408}
        height={290}
        className="h-9 w-auto shrink-0 sm:h-10"
        priority
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-heading text-lg font-extrabold tracking-tight"
            style={{ color: textColor }}
          >
            AD MELIORA
          </span>
          <span
            className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: mutedColor }}
          >
            Investment Pvt Ltd
          </span>
        </span>
      )}
    </div>
  );
}
