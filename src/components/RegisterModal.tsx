import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, GraduationCap, Heart } from 'lucide-react';

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
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

  const handleRoleSelect = (role: 'student' | 'teacher' | 'guardian') => {
    navigate(`/register-${role}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Choose Your Role</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect('student')}
            className="w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 hover:border-orange-500 text-white p-6 rounded-lg transition-all duration-200 transform hover:scale-105 group"
          >
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg mr-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Register as Student</h3>
                <p className="text-gray-400 text-sm">Access courses and learning materials</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleRoleSelect('teacher')}
            className="w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 hover:border-orange-500 text-white p-6 rounded-lg transition-all duration-200 transform hover:scale-105 group"
          >
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Register as Teacher</h3>
                <p className="text-gray-400 text-sm">Create and manage courses</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleRoleSelect('guardian')}
            className="w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 hover:border-orange-500 text-white p-6 rounded-lg transition-all duration-200 transform hover:scale-105 group"
          >
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Register as Guardian</h3>
                <p className="text-gray-400 text-sm">Monitor child's progress</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;