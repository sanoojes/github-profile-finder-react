import { ReactNode } from "react";

interface BtnProps {
    children: ReactNode;
    onClick(): void;
}

const Button = ({ children, onClick }: BtnProps) => {
    return (
        <button
            className="px-4 py-2 w-full bg-neutral-900 rounded-lg font-bold hover:bg-neutral-700 hover:bg-opacity-70 focus: outline-none transition-colors text-white flex-1"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
