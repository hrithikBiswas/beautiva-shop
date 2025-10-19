'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const supabase = createClient();

    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initAuth = async () => {
            try {
                setLoading(true);
                const { data: sessionData, error: sessionError } =
                    await supabase.auth.getSession();
                if (sessionError) throw sessionError;

                setSession(sessionData?.session ?? null);
                setUser(sessionData?.session?.user ?? null);
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
        if (error) console.error('Sign-in error:', error);
        return { data, error };
    };

    const signUp = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) console.error('Sign-up error:', error);
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
