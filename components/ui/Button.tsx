type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {

  const baseClass =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium transition";

  const variants = {
    primary:
      "bg-[#005699] text-white hover:bg-[#00487d]",

    secondary:
      "border border-[#005699] text-[#005699] hover:bg-blue-50",
  };

  const className = `${baseClass} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}