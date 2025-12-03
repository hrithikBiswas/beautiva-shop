'use client';

import { useAuth } from '@/hooks';
import {
    addCartItem,
    addWishlist,
    getWishlistItems,
    getCartItems,
    getSingleProduct,
    getWishlistProduct,
    deleteWishlist,
    getCartProduct,
} from '@/utils/actions';
import { addToast } from '@heroui/react';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const [cartLoadingId, setCartLoadingId] = useState(null);
    const [wishlistLoadingId, setWishlistLoadingId] = useState(null);
    const [removeWishlistLoadingId, setRemoveWishlistLoadingId] =
        useState(null);

    const { user } = useAuth();

    // --------------------- Fetch all products ---------------------
    useEffect(() => {
        (async () => {
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
        })();
    }, []);

    // --------------------- Fetch cart & wishlist ---------------------
    useEffect(() => {
        if (!user?.id) return;

        (async () => {
            const [cart, wishlist] = await Promise.all([
                getCartItems(),
                getWishlistItems(),
            ]);

            setCartItems(cart);
            setWishlistItems(wishlist);
        })();
    }, [user?.id]);

    // --------------------- Add to Cart ---------------------
    const addToCart = async (productId, qty) => {
        try {
            setCartLoadingId(productId);

            const { message } = await addCartItem(productId, user.id, qty);

            // Update local state
            const updatedCart = await getCartItems();
            setCartItems(updatedCart);

            addToast({
                title: 'Cart Status',
                description: message,
                color: 'success',
                radius: 'sm',
                timeout: 3000,
                hideCloseButton: true,
                shouldShowTimeoutProgress: true,
            });
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setCartLoadingId(null);
        }
    };

    // --------------------- Add to Wishlist ---------------------
    const addToWishlist = async (productId) => {
        try {
            setWishlistLoadingId(productId);

            await addWishlist(productId, user.id);

            const updatedWishlist = await getWishlistItems();
            setWishlistItems(updatedWishlist);

            addToast({
                title: 'Wishlist Status',
                description: 'Added to wishlist.',
                color: 'success',
                radius: 'sm',
                timeout: 3000,
                hideCloseButton: true,
                shouldShowTimeoutProgress: true,
            });
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        } finally {
            setWishlistLoadingId(null);
        }
    };

    // --------------------- Remove Wishlist ---------------------
    const removeWishlist = async (wishlistId) => {
        try {
            setRemoveWishlistLoadingId(wishlistId);

            await deleteWishlist(wishlistId);

            const updated = await getWishlistItems();
            setWishlistItems(updated);
        } catch (error) {
            console.error('Error deleting wishlist:', error);
        } finally {
            setRemoveWishlistLoadingId(null);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,

                // Cart
                cartItems,
                cartLoadingId,
                addToCart,
                totalCartItem: cartItems.length,
                isAlreadyInCart: (id) =>
                    cartItems.some((x) => x.productId === id),

                // Wishlist
                wishlistItems,
                wishlistLoadingId,
                removeWishlistLoadingId,
                addToWishlist,
                removeWishlist,
                totalWishlistItem: wishlistItems.length,
                isAlreadyInWishlist: (id) =>
                    wishlistItems.some((x) => x.productId === id),

                // Product
                singleProduct: getSingleProduct,
                wishlistProduct: () => getWishlistProduct(user?.id),
                cartProduct: () => getCartProduct(user?.id),
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
