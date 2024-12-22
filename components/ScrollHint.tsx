interface ScrollHintProps {
  visible: boolean;
}

export const ScrollHint: React.FC<ScrollHintProps> = ({ visible }) => {
  return (
    <div
      className={`w-full pb-8 bg-gradient-to-b transition-all duration-300 to-slate-900 ${!visible ? "opacity-0" : "opacity-100"}`}
    >
      <p className="flex justify-center mt-4 text-gray-300">Scroll for more</p>
      <div className="animate-bounce flex justify-center mt-4">
        <div className="bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
