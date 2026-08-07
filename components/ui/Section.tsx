import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  background?: "white" | "gray" | "blue";
  className?: string;
};

export default function Section({
  children,
  background = "white",
  className = "",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-[#F8FAFC]",
    blue: "bg-[#F4F9FF]",
  };

  return (
    <section className={`${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}