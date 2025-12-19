'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePathname } from 'next/navigation';
import EyeIcon from '@/components/SVG/EyeIcon';
import EyeSlashIcon from '@/components/SVG/EyeSlashIcon';

const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { signInWithGoogle, signIn, user, loading } = useAuth();
    const pathname = usePathname();

    if (user && pathname.startsWith('/login')) {
        return (window.location.href = '/');
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .email('Invalid email address')
                .matches(
                    /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
                    'Please enter a valid email address'
                ),
            password: Yup.string()
                .required('Required')
                .min(8, 'Must be at least 8 characters long')
                .matches(/[a-z]/, 'Must contain at least one lowercase letter')
                .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
                .matches(/\d/, 'Must contain at least one number')
                .matches(
                    /[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?]/,
                    'Must contain at least one special character'
                ),
        }),
        onSubmit: async (values) => {
            const { email, password } = values;
            await signIn(email, password);
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="bg-white dark:bg-gray-950 rounded-xl shadow-2xl w-full max-w-md p-8 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Sign in to your account to continue
                    </p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 transition-all duration-200"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-base text-red-500">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-0 transition-all duration-200 pr-12"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                            >
                                {!showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-base text-red-500">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full cursor-pointer ${
                            loading ? 'bg-blue-500!' : 'bg-blue-600'
                        } hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-500 dark:text-gray-500">
                        Or continue with
                    </span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Sign In Button */}
                <button
                    onClick={signInWithGoogle}
                    className="w-full cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Sign in with Google
                </button>

                {/* Sign Up Link */}
                <div className="text-center mt-6">
                    <p className="text-gray-600 dark:text-gray-500">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
