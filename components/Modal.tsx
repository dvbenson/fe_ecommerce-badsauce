import { ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export default function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="relative w-full max-w-md rounded bg-white shadow-lg">
          <div className="p-4">{children}</div>
          <button
            onClick={onClose}
            className="absolute right-2 top-2 text-lg font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
