import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Mail, Lock, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState<'email' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [resetSent, setResetSent] = useState(false);

  const { resetPassword, isLoading, error } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;
    setPasswordStrength(strength);
    
    setPasswordMatch(confirmPassword === value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(newPassword === value);
  };

  const handleSendReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValid) return;

    try {
      await resetPassword(email);
      setResetSent(true);
      setTimeout(() => setStep('reset'), 2000);
    } catch (err) {
      // Error handled by context
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordMatch || passwordStrength < 3) return;

    // In a real app, you would verify the reset token here
    // For now, we'll just simulate the reset
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to login or show success message
      window.location.href = '/login';
    } catch (err) {
      // Error handled by context
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mr-3">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">VK Global Publications</h1>
            </div>
          </Link>
          <h2 className="text-xl text-white">Reset Password</h2>
        </div>

        {/* Reset Form */}
        <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 shadow-xl">
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-400 text-sm">{error}</span>
            </div>
          )}

          {step === 'email' && (
            <>
              {resetSent ? (
                <div className="text-center">
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Reset Link Sent!</h3>
                    <p className="text-gray-300 text-sm">
                      Check your email for password reset instructions. Redirecting to reset form...
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendReset} className="space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-gray-300 text-sm">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        placeholder="Enter your email"
                        required
                      />
                      {email && (
                        <div className="absolute right-3 top-3">
                          {emailValid ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!emailValid || isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending Reset Link...
                      </>
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>
                </form>
              )}
            </>
          )}

          {step === 'reset' && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="text-center mb-6">
                <p className="text-gray-300 text-sm">
                  Create a new password for your account.
                </p>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    id="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={handlePasswordChange}
                    className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {newPassword && (
                  <div className="mt-2">
                    <div className="flex space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded ${
                            i < passwordStrength
                              ? i < 2
                                ? 'bg-red-500'
                                : i < 4
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                              : 'bg-neutral-600'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">
                      Password strength: {passwordStrength < 2 ? 'Weak' : passwordStrength < 4 ? 'Medium' : 'Strong'}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={`w-full pl-10 pr-10 py-3 bg-neutral-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${
                      confirmPassword && !passwordMatch
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-600 focus:border-orange-500'
                    }`}
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {confirmPassword && !passwordMatch && (
                  <p className="mt-1 text-sm text-red-400">Passwords do not match</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!passwordMatch || passwordStrength < 3 || isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Resetting Password...
                  </>
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>
          )}

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Remember your password?{' '}
              <Link to="/login" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;