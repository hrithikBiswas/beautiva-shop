'use client';

import { useAuth } from '@/hooks';
import {
    addCartItem,
    addWishlist,
    getWishlistItems,
    getCartItems,
    getSingleProduct,
    addUpadateCartItem,
} from '@/utils/actions';
import { addToast } from '@heroui/react';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartLoadingId, setCartLoadingId] = useState(null);
    const [wishlistLoadingId, setWishlistLoadingId] = useState(null);
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

    const addToCart = async (productId, qty) => {
        try {
            setCartLoadingId(productId);
            const { message } = await addCartItem(productId, user.id, qty);

            addToast({
                title: 'Cart item Status',
                description: message,
                color: 'success',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });

            console.log('Product added to cart successfully', data);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        } finally {
            setTimeout(() => {
                setCartLoadingId(null);
            }, 3000);
        }
    };
    // const updateToCart = async (productId, qty) => {
    //     try {
    //         setCartLoadingId(productId);

    //         const data = await addUpadateCartItem(productId, user.id, qty);

    //         addToast({
    //             title: 'Cart item Status',
    //             description: 'update to cart successfully.',
    //             color: 'warning',
    //             radius: 'sm',
    //             hideCloseButton: true,
    //             timeout: 3000,
    //             shouldShowTimeoutProgress: true,
    //         });

    //         console.log('Product update to cart successfully', data);
    //     } catch (error) {
    //         console.error('Error adding product to cart:', error);
    //     } finally {
    //         setTimeout(() => {
    //             setCartLoadingId(null);
    //         }, 3000);
    //     }
    // };
    const addToWishlist = async (productId) => {
        try {
            setWishlistLoadingId(productId);
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
            setTimeout(() => {
                setWishlistLoadingId(null);
            }, 3000);
        }
    };

    const isAlreadyInCart = async (productId) => {
        try {
            const cartItems = await getCartItems();
            const isExist = cartItems.find(
                (item) => item.productId === productId
            );

            return isExist;
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const isAlreadyInWishlist = async (productId) => {
        try {
            const wishlistItems = await getWishlistItems();
            const isExist = wishlistItems.find(
                (item) => item.productId === productId
            );

            return isExist ? true : false;
        } catch (error) {
            console.error('Error fetching wishlist items:', error);
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
    const totalCartItem = async () => {
        try {
            const items = await getCartItems();
            return items?.length || 0;
        } catch (error) {
            console.error('Error fetching CartItems items:', error);
        }
    };
    const singleProduct = async (productId) => {
        try {
            const productData = await getSingleProduct(productId);
            return productData;
        } catch (error) {
            console.error('Error fetching single product data:', error);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                cartLoadingId,
                wishlistLoadingId,
                addToCart,
                addToWishlist,
                isAlreadyInWishlist,
                totalWishlistItem,
                totalCartItem,
                singleProduct,
                isAlreadyInCart,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
