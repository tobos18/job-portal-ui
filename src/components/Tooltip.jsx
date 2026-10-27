import { useId } from "react";

export const Tooltip = ({ content, children }) => {
  const id = useId();

  return (
    <span
      tabIndex={0}
      aria-describedby={id}
      className="group/tooltip relative inline-block focus:outline-none"
    >
      {children}
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-gray-700/50 bg-gray-800/95 px-4 py-3 text-left text-xs leading-relaxed text-gray-300 opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100"
      >
        {content}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-gray-700/50 bg-gray-800"></span>
      </span>
    </span>
  );
};
