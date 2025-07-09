import React, { useEffect, useRef } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface NotFoundModalProps {
  onClose: () => void;
  onRegister: () => void;
}

const NotFoundModal: React.FC<NotFoundModalProps> = ({ onClose, onRegister }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Focus trap
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleTab);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-orange-500 mr-2" />
            <h2 className="text-xl font-bold text-white">Account Not Found</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 mb-4">
            We couldn't find an account with this email address. Would you like to register a new account?
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onRegister}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Yes, Register
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 border border-neutral-600"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundModal;