import { FC, ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl"; // Nuevo prop para tamaño
}

const sizeClasses = {
  sm: "max-w-sm",   // ~ 24rem
  md: "max-w-md",   // ~ 28rem
  lg: "max-w-2xl",  // ~ 42rem
  xl: "max-w-4xl",  // ~ 56rem
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, size = "md" }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative bg-white rounded-xl shadow-xl w-full ${sizeClasses[size]} p-6 z-10 transition-all duration-300 transform scale-100`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
