'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { redirect, useRouter } from 'next/navigation';
import { addUser } from '@/utils/actions';
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

                const {
                    data: { user },
                } = await supabase.auth.getUser();
                addUser(user ?? null);
            } catch (err) {
                console.error('Error initializing auth:', err);
            } finally {
                setLoading(false);
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
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.error('Sign-in error:', error);
            addToast({
                title: 'Login Error',
                description: error.message,
                color: 'danger',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        }

        redirect('/');

        return { data, error };
    };

    const signUp = async (email, password) => {
        setLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}`,
            },
        });
        if (error) console.error('Sign-up error:', error);

        addToast({
            title: 'Confirm Mail',
            description: 'Check your mail to confirm email.',
            color: 'success',
            radius: 'sm',
            hideCloseButton: true,
        });

        setLoading(false);

        // redirect(`${window.location.origin}/login`);
        redirect('/');

        return { data, error };
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Sign-out error:', error);
            return { error };
        }
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
