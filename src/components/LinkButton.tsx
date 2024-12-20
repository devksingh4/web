interface LinkButtonProps {
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    text: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, icon: Icon, text }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-4 h-4" />
    <span>{text}</span>
  </a>
);