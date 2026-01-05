import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noBorder?: boolean;
  style?: React.CSSProperties;
}

export function Section({ children, className, id, noBorder = false, style }: SectionProps) {
  return (
    <section
      id={id}
      style={style}
      className={clsx(
        "relative w-full overflow-hidden py-0 transition-all duration-700",
        !noBorder && "border-b border-white/10",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
