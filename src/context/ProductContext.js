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
    deleteCart,
    updateProductQtyInCart,
} from '@/utils/actions';
import { addToast } from '@heroui/react';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [cartItems, setCartItems] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [wishlistProducts, setWishlistProducts] = useState([]);

    const [cartLoadingId, setCartLoadingId] = useState(null);
    const [wishlistLoadingId, setWishlistLoadingId] = useState(null);
    const [removeWishlistLoadingId, setRemoveWishlistLoadingId] =
        useState(null);

    const { user } = useAuth();

    // --------------------- Add to Cart ---------------------
    const addToCart = async (productId, qty) => {
        try {
            setCartLoadingId(productId);

            const { message } = await addCartItem(productId, user.id, qty);

            // Update local state
            const updatedCart = await getCartItems();
            setCartItems(updatedCart);

            const updatedCartProducts = await getCartProduct(user.id);
            setCartProducts(updatedCartProducts);

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

            const updatedWishlistProducts = await getWishlistProduct(user.id);
            setWishlistProducts(updatedWishlistProducts);

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
    const removeWishlist = async (wishlistId) => {
        try {
            setWishlistLoadingId(wishlistId);

            await deleteWishlist(wishlistId);

            const updated = await getWishlistItems();
            setWishlistItems(updated);

            const updatedWishlistProducts = await getWishlistProduct(user.id);
            setWishlistProducts(updatedWishlistProducts);
        } catch (error) {
            console.error('Error deleting cart:', error);
        } finally {
            setWishlistLoadingId(null);
        }
    };

    // --------------------- Remove Cart ---------------------
    const removeCart = async (CartId) => {
        try {
            setCartLoadingId(CartId);

            await deleteCart(CartId);

            const updated = await getCartItems();
            setCartItems(updated);

            const updatedCartProducts = await getCartProduct(user.id);
            setCartProducts(updatedCartProducts);
        } catch (error) {
            console.error('Error deleting cart:', error);
        } finally {
            setCartLoadingId(null);
        }
    };

    const incrementProductQtyInCart = async (cartId, currentQty) => {
        try {
            const newQty = currentQty + 1;

            await updateProductQtyInCart(cartId, user.id, newQty);

            // Refresh local state
            const updatedCartItems = await getCartItems();
            setCartItems(updatedCartItems);

            const updatedProducts = await getCartProduct(user.id);
            setCartProducts(updatedProducts);
        } catch (error) {
            console.error('Error incrementing product quantity:', error);
        }
    };

    const decrementProductQtyInCart = async (cartId, currentQty) => {
        try {
            const newQty = currentQty - 1;

            if (newQty < 1) {
                removeCart(cartId);
            } else {
                await updateProductQtyInCart(cartId, user.id, newQty);
            }

            // Refresh local state
            const updatedCartItems = await getCartItems();
            setCartItems(updatedCartItems);

            const updatedProducts = await getCartProduct(user.id);
            setCartProducts(updatedProducts);
        } catch (error) {
            console.error('Error decrementing product quantity:', error);
        }
    };

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

    // --------------------- Fetch cart & wishlist, Wishlist product ---------------------
    useEffect(() => {
        if (!user?.id) return;

        (async () => {
            const [cart, wishlist, wishlistProduct, cartProduct] =
                await Promise.all([
                    getCartItems(),
                    getWishlistItems(),
                    getWishlistProduct(user?.id),
                    getCartProduct(user?.id),
                ]);

            setCartItems(cart);
            setWishlistItems(wishlist);
            setWishlistProducts(wishlistProduct);
            setCartProducts(cartProduct);
        })();
    }, [user?.id]);

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,

                // Cart
                cartItems,
                cartProducts,
                cartLoadingId,
                incrementProductQtyInCart,
                decrementProductQtyInCart,
                addToCart,
                removeCart,
                totalCartItem: cartItems.length,
                isAlreadyInCart: (id) =>
                    cartProducts.some((x) => x.productId === id),

                // Wishlist
                wishlistItems,
                wishlistProducts,
                wishlistLoadingId,
                removeWishlistLoadingId,
                addToWishlist,
                removeWishlist,
                isAlreadyInWishlist: (id) =>
                    wishlistProducts.some((x) => x.productId === id),

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
