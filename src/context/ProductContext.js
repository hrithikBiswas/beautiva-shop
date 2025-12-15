'use client';

import { useAuth } from '@/hooks';
import {
    addCartItem,
    addWishlist,
    deleteWishlist,
    deleteCart,
    updateProductQtyInCart,
} from '@/utils/actions';
import { addToast } from '@heroui/react';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [cartLoadingId, setCartLoadingId] = useState(null);
    const [wishlistLoadingId, setWishlistLoadingId] = useState(null);

    const { user } = useAuth();

    // --------------------- Add to Cart ---------------------

    const addToCart = async (productId, qty) => {
        try {
            setCartLoadingId(productId);
            console.log('working');

            const res = await fetch('/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    productId,
                    userId: user.id,
                    qty,
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Faild to add to cart.');
            }

            const { message } = await res.json();

            await refreshCart();

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
            addToast({
                title: 'Error',
                description: error.message || 'Failed to add item to cart',
                color: 'error',
                radius: 'sm',
                timeout: 3000,
            });
        } finally {
            setCartLoadingId(null);
        }
    };

    // --------------------- Add to Wishlist ---------------------
    const addToWishlist = async (productId) => {
        try {
            setWishlistLoadingId(productId);

            await addWishlist(productId, user.id);

            const updatedWishlistRes = await fetch('/api/wishlist').then(
                (res) => res.json()
            );
            setWishlistItems(updatedWishlistRes.wishlistData);

            const updatedWishlistProductRes = await fetch(
                `/api/product/wishlist/${user.id}`
            ).then((res) => res.json());
            setWishlistProducts(updatedWishlistProductRes.wishlistProductData);

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

            const updatedWishlistRes = await fetch('/api/wishlist').then(
                (res) => res.json()
            );
            setWishlistItems(updatedWishlistRes.wishlistData);

            const updatedWishlistProductRes = await fetch(
                `/api/product/wishlist/${user.id}`
            ).then((res) => res.json());
            setWishlistProducts(updatedWishlistProductRes.wishlistProductData);
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

            await refreshCart();
        } catch (error) {
            console.error('Error deleting cart:', error);
        } finally {
            setCartLoadingId(null);
        }
    };

    const incrementProductQtyInCart = async (cartId, currentQty) => {
        try {
            const newQty = currentQty + 1;

            const cartUpdateRes = await fetch('/api/cart', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cartId,
                    userId: user.id,
                    quantity: newQty,
                }),
            });

            const { message } = await cartUpdateRes.json();

            await refreshCart();

            addToast({
                title: 'Cart Status',
                description: message,
                color: 'success',
                radius: 'sm',
                timeout: 1500,
                hideCloseButton: true,
                shouldShowTimeoutProgress: true,
            });
        } catch (error) {
            console.error('Error incrementing product quantity:', error);
        }
    };

    const decrementProductQtyInCart = async (cartId, currentQty) => {
        try {
            const newQty = currentQty - 1;

            console.log(newQty);

            // if (newQty < 1) {
            //     removeCart(cartId);
            // } else {
            //     await updateProductQtyInCart(cartId, user.id, newQty);
            // }

            const cartUpdateRes = await fetch('/api/cart', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cartId,
                    userId: user.id,
                    quantity: newQty,
                }),
            });

            const { message } = await cartUpdateRes.json();

            await refreshCart();

            addToast({
                title: 'Cart Status',
                description: message,
                color: 'success',
                radius: 'sm',
                timeout: 1500,
                hideCloseButton: true,
                shouldShowTimeoutProgress: true,
            });
        } catch (error) {
            console.error('Error decrementing product quantity:', error);
        }
    };

    const getSinglePost = async (postId) => {
        try {
            const postRes = await fetch(`/api/blog/${postId}`).then((res) =>
                res.json()
            );
            return postRes.singlePostData;
        } catch (error) {
            console.error(`Error fetching post ${postId} :`, error.message);
            throw error;
        }
    };

    const getSingleProduct = async (id) => {
        try {
            const productRes = await fetch(`/api/product/${id}`).then((res) =>
                res.json()
            );
            return productRes.singleProductData;
        } catch (error) {
            console.error(
                `Error fetching single product ${id} :`,
                error.message
            );
            throw error;
        }
    };

    const refreshCart = async () => {
        const [cartRes, productsRes] = await Promise.all([
            fetch('/api/cart').then((res) => res.json()),
            fetch(`/api/product/cart/${user.id}`).then((res) => res.json()),
        ]);

        setCartItems(cartRes.cartData || []);
        setCartProducts(productsRes.cartProductData || []);
    };

    // --------------------- Fetch all initail items ---------------------
    useEffect(() => {
        if (!user) return;

        (async () => {
            try {
                setLoading(true);
                const [
                    productRes,
                    wishlistProductRes,
                    cartProductRes,
                    blogsRes,
                    categoryRes,
                    cartRes,
                    wishlistRes,
                ] = await Promise.all([
                    fetch('/api/product').then((res) => res.json()),
                    fetch(`/api/product/wishlist/${user.id}`).then((res) =>
                        res.json()
                    ),
                    fetch(`/api/product/cart/${user.id}`).then((res) =>
                        res.json()
                    ),
                    fetch('/api/blog').then((res) => res.json()),
                    fetch('/api/category').then((res) => res.json()),
                    fetch('/api/cart').then((res) => res.json()),
                    fetch('/api/wishlist').then((res) => res.json()),
                ]);

                setProducts(productRes.productData);
                setWishlistProducts(wishlistProductRes.wishlistProductData);
                setCartProducts(cartProductRes.cartProductData);
                setBlogs(blogsRes.blogData);
                setCategories(categoryRes.categoryData);
                setCartItems(cartRes.cartData);
                setWishlistItems(wishlistRes.wishlistData);
            } catch (err) {
                console.error('Failed to load initial data:', { err });
            } finally {
                setLoading(false);
            }
        })();
    }, [user]);

    return (
        <ProductContext.Provider
            value={{
                products,
                getSingleProduct,
                loading,

                // Cart
                cartItems,
                cartProducts,
                cartLoadingId,
                incrementProductQtyInCart,
                decrementProductQtyInCart,
                addToCart,
                removeCart,
                isAlreadyInCart: (id) =>
                    cartProducts.some((x) => x.productId === id),

                // Wishlist
                wishlistItems,
                wishlistProducts,
                wishlistLoadingId,
                addToWishlist,
                removeWishlist,
                isAlreadyInWishlist: (id) =>
                    wishlistProducts.some((x) => x.productId === id),

                //category
                categories,

                //post
                blogs,
                getSinglePost,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
