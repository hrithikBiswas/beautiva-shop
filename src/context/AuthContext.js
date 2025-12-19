'use client';

import { createContext, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { redirect, useRouter } from 'next/navigation';
import { getUsers } from '@/utils/actions';
import { addToast } from '@heroui/react';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const supabase = createClient();

    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const initAuth = async () => {
            try {
                setLoading(true);
                const { data: sessionData, error: sessionError } =
                    await supabase.auth.getSession();

                if (sessionError) throw sessionError;

                setSession(sessionData?.session ?? null);
                setUser(sessionData?.session?.user ?? null);
                sessionStorage.setItem(
                    'currentUser',
                    JSON.stringify(sessionData?.session?.user ?? null)
                );

                const {
                    data: { user },
                } = await supabase.auth.getUser();

                if (user?.email) {
                    // addUser(user);

                    await fetch('/api/user', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ user }),
                    });
                }
            } catch (err) {
                console.error('Error initializing auth:', err);
            } finally {
                setLoading(false);
                // setTimeout(() => setLoading(false), 5000);
            }
        };

        initAuth();

        const { data: subscription } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setLoading(true);
                setSession(session ?? null);
                setUser(session?.user ?? null);

                setLoading(false);
            }
        );

        return () => {
            subscription?.subscription?.unsubscribe();
        };
    }, [supabase]);

    const signIn = async (email, password) => {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.error('Sign-in error:', error);

            setLoading(false);

            return addToast({
                title: 'Login Error',
                description: error.message,
                color: 'danger',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        }

        addToast({
            title: 'Login Status',
            description: "You've successfully logged in.",
            color: 'success',
            radius: 'sm',
            hideCloseButton: true,
            timeout: 3000,
            shouldShowTimeoutProgress: true,
        });

        setLoading(false);

        // redirect('/');
        // router.push('/');

        return { data, error };
    };

    const signUp = async (email, password, fullName) => {
        setLoading(true);

        const users = await getUsers();

        const isEmailExist = users.some((user) => user.email === email);

        if (isEmailExist) {
            setLoading(false);
            return addToast({
                title: 'Register Error',
                description: 'Oops! This email is already exists.',
                color: 'danger',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}`,
                data: {
                    full_name: fullName,
                    name: fullName,
                },
            },
        });

        addToast({
            title: error ? 'Error' : 'Confirm Mail',
            description: error
                ? error.message
                : 'Check your mail to confirm email.',
            color: error ? 'danger' : 'success',
            radius: 'sm',
            hideCloseButton: true,
        });

        if (error) {
            setLoading(false);
            return console.log('Sign-up error:', { error });
        }
        setLoading(false);
        redirect('/login');
        return { data, error };
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Sign-out error:', error);
            return { error };
        }
        setUser(null);
        sessionStorage.removeItem('currentUser');
        redirect('/login');
    };

    const signInWithGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: `${window.location.origin}/auth/callback` },
        });

        console.log(data);

        if (error) console.error('Google sign-in error:', error);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                loading,
                setLoading,
                signIn,
                signUp,
                signOut,
                signInWithGoogle,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
