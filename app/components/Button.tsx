// Button Component
import { ReactNode } from "react";

const Button = ({ className = "", children, ...props }: { className?: string; children: ReactNode; [key: string]: any }) => {
  return (
    <button
      className={`bg-yellow-500 hover:bg-yellow-400 text-neutral-900 font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 mt-6 sm:mt-8" ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;