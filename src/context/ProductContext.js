'use client';

import { useAuth } from '@/hooks';
import { addCartItem, addWishlist, getWishlistItems } from '@/utils/actions';
import { addToast } from '@heroui/react';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error('Failed to load products', err);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const addToCart = async (productId) => {
        try {
            setCartLoading(true);
            await addCartItem(productId, user.id);

            addToast({
                title: 'Cart item Status',
                description: 'Added to cart successfully.',
                color: 'success',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });

            console.log('Product added to cart successfully');
        } catch (error) {
            console.error('Error adding product to cart:', error);
        } finally {
            new Promise((resolve) => {
                setTimeout(() => {
                    setCartLoading(false);
                    resolve();
                }, 3000);
            });
        }
    };
    const addToWishlist = async (productId) => {
        try {
            setWishlistLoading(true);
            await addWishlist(productId, user.id);

            addToast({
                title: 'Wishlist item Status',
                description: 'Added to wishlist successfully.',
                color: 'success',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });

            console.log('Product added to wishlist successfully');
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        } finally {
            new Promise((resolve) => {
                setTimeout(() => {
                    setWishlistLoading(false);
                    resolve();
                }, 3000);
            });
        }
    };

    const totalWishlistItem = async () => {
        try {
            const items = await getWishlistItems();
            return items?.length || 0;
        } catch (error) {
            console.error('Error fetching wishlist items:', error);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                cartLoading,
                wishlistLoading,
                addToCart,
                addToWishlist,
                totalWishlistItem,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
