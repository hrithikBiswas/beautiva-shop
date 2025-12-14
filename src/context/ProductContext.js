'use client';

import { useAuth } from '@/hooks';
import {
    addCartItem,
    addWishlist,
    getSingleProduct,
    getWishlistProduct,
    deleteWishlist,
    getCartProduct,
    deleteCart,
    updateProductQtyInCart,
    getPostUser,
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
    const [removeWishlistLoadingId, setRemoveWishlistLoadingId] =
        useState(null);

    const { user } = useAuth();

    // --------------------- Add to Cart ---------------------
    const addToCart = async (productId, qty) => {
        try {
            setCartLoadingId(productId);

            const { message } = await addCartItem(productId, user.id, qty);

            // Update local state
            const updatedCartRes = fetch('/api/cart').then((res) => res.json());
            setCartItems(updatedCartRes.cartData);

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

            const updatedWishlistRes = await fetch('/api/wishlist').then(
                (res) => res.json()
            );
            setWishlistItems(updatedWishlistRes.wishlistData);

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

            const updatedWishlistRes = await fetch('/api/wishlist').then(
                (res) => res.json()
            );
            setWishlistItems(updatedWishlistRes.wishlistData);

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

            const updatedCartRes = await fetch('/api/cart').then((res) =>
                res.json()
            );
            setCartItems(updatedCartRes.cartData);

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
            const updatedCartRes = await fetch('/api/cart').then((res) =>
                res.json()
            );
            setCartItems(updatedCartRes.cartData);

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
            const updatedCartRes = await fetch('/api/cart').then((res) =>
                res.json()
            );
            setCartItems(updatedCartRes.cartData);

            const updatedProducts = await getCartProduct(user.id);
            setCartProducts(updatedProducts);
        } catch (error) {
            console.error('Error decrementing product quantity:', error);
        }
    };

    const getSinglePost = async (postId) => {
        try {
            const post = await getPostUser(postId);
            return post;
        } catch (error) {
            console.error(`Error fetching post ${postId} :`, error.message);
            throw error;
        }
    };

    // --------------------- Fetch all products ---------------------
    useEffect(() => {
        if (!user) return;

        (async () => {
            try {
                setLoading(true);
                const [
                    productRes,
                    wishlistProductRes,
                    blogsRes,
                    categoryRes,
                    cartRes,
                    wishlistRes,
                ] = await Promise.all([
                    fetch('/api/product').then((res) => res.json()),
                    fetch(`/api/product/wishlist/${user.id}`).then((res) =>
                        res.json()
                    ),
                    fetch('/api/blog').then((res) => res.json()),
                    fetch('/api/category').then((res) => res.json()),
                    fetch('/api/cart').then((res) => res.json()),
                    fetch('/api/wishlist').then((res) => res.json()),
                ]);

                setProducts(productRes.productData);
                setWishlistProducts(wishlistProductRes.wishlistProductData);
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

    // --------------------- Fetch cart & wishlist, Wishlist product ---------------------
    useEffect(() => {
        if (!user?.id) return;

        (async () => {
            const [cartProduct] = await Promise.all([getCartProduct(user?.id)]);

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
