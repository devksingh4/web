export default function NiceLink({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}) {
  return (
    <a
      href={href}
      className="text-blue-500 hover:text-blue-300 transition-colors print:text-black"
      {...props}
    >
      {children}
    </a>
  );
}
