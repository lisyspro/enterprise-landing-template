type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({ children, href }: ButtonProps) {
  const className =
  "inline-flex items-center justify-center rounded-lg bg-[#005699] px-5 py-2.5 text-white font-medium transition hover:bg-[#00487d]";
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}