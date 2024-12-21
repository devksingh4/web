export default function NiceLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: any;
  }) {
    return (
      <a className="text-blue-500 hover:text-blue-300 transition-colors" {...props}>
        {children}
      </a>
    );
  }