'use client';

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Badge,
    Divider,
    Spinner,
} from '@heroui/react';
import { CartIcon, DeleteIcon, MinusIcon, PlusIcon } from '@/components/SVG';
import useProduct from '@/hooks/useProduct';
import Image from 'next/image';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Cart() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        cartLoadingId,
        cartProducts,
        removeCart,
        incrementProductQtyInCart,
        decrementProductQtyInCart,
    } = useProduct();

    const debouncedIncrementProductQtyInCart = useDebouncedCallback(
        (cartId, qty) => incrementProductQtyInCart(cartId, qty),
        400
    );
    const debouncedDecrementProductQtyInCart = useDebouncedCallback(
        (cartId, qty) => decrementProductQtyInCart(cartId, qty),
        400
    );

    const subtotal = cartProducts.reduce((total, item) => {
        if (!item || !item.product) return total;

        const { quantity } = item;
        const { price } = item.product;

        return total + quantity * price;
    }, 0);

    const tax = Math.round(+(subtotal * 0.075));

    const total = Math.round(+(subtotal + tax));

    return (
        <>
            <Button
                onPress={onOpen}
                className="min-w-6 min-h-6 p-0 bg-transparent overflow-visible"
            >
                <Badge
                    color="danger"
                    content={cartProducts.length}
                    shape="circle"
                    className="cursor-pointer"
                >
                    <CartIcon />
                </Badge>
            </Button>
            <Drawer
                backdrop="blur"
                isOpen={isOpen}
                motionProps={{
                    variants: {
                        enter: {
                            opacity: 1,
                            x: 0,
                            duration: 0.3,
                        },
                        exit: {
                            x: 100,
                            opacity: 0,
                            duration: 0.3,
                        },
                    },
                }}
                onOpenChange={onOpenChange}
            >
                <DrawerContent className="bg-white text-black dark:bg-gray-950 dark:text-white">
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex justify-center flex-col gap-1">
                                <h2 className="font-semibold text-3xl py-3 text-center border-b border-gray-400">
                                    My Cart
                                </h2>
                            </DrawerHeader>
                            <DrawerBody className="pb-6 space-y-4">
                                {cartProducts.length === 0 && (
                                    <p className="text-xl text-gray-500">
                                        No products found in your cart!
                                    </p>
                                )}
                                {cartProducts.map(
                                    ({
                                        id: cartId,
                                        quantity: qty,
                                        product,
                                    }) => (
                                        <div
                                            key={cartId}
                                            className="flex gap-3 ring ring-gray-200 shadow-md rounded-lg p-2"
                                        >
                                            <Image
                                                src={product?.image}
                                                alt={product?.name}
                                                className="w-[90px] h-[90px] object-cover rounded-lg"
                                                width={90}
                                                height={90}
                                            />

                                            <div className="flex-1 flex flex-col gap-1 items-start">
                                                <h3 className="font-semibold text-gray-700 capitalize leading-5">
                                                    {product?.name}
                                                </h3>
                                                <span className="text-gray-700 text-sm">
                                                    {product?.category}
                                                </span>
                                                <div className="flex items-center border border-gray-300 rounded-md">
                                                    <Button
                                                        onPress={() =>
                                                            debouncedDecrementProductQtyInCart(
                                                                cartId,
                                                                qty
                                                            )
                                                        }
                                                        radius="none"
                                                        variant="light"
                                                        className="p-2 rounded-s-md hover:bg-gray-200 cursor-pointer min-w-0 h-fit"
                                                    >
                                                        <MinusIcon className="w-4 h-4 text-gray-600 dark:text-white" />
                                                    </Button>

                                                    <input
                                                        name="qty"
                                                        type="number"
                                                        value={qty}
                                                        min="1"
                                                        // max={product?.stock}
                                                        readOnly
                                                        className="w-10 text-center text-base border-0 outline-none focus:ring-0"
                                                    />
                                                    <Button
                                                        onPress={() =>
                                                            debouncedIncrementProductQtyInCart(
                                                                cartId,
                                                                qty
                                                            )
                                                        }
                                                        radius="none"
                                                        variant="light"
                                                        className="p-2 rounded-e-md hover:bg-gray-200 cursor-pointer min-w-0 h-fit"
                                                    >
                                                        <PlusIcon className="w-4 h-4 text-gray-600 dark:text-white" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-around">
                                                <h2 className="text-fuchsia-900 text-2xl font-semibold">
                                                    ${qty * product?.price}
                                                </h2>
                                                <Button
                                                    color="danger"
                                                    radius="full"
                                                    variant="shadow"
                                                    className="min-w-fit h-fit p-2 me-1"
                                                    isDisabled={
                                                        cartLoadingId === cartId
                                                    }
                                                    onPress={() =>
                                                        removeCart(cartId)
                                                    }
                                                >
                                                    {cartLoadingId ===
                                                    cartId ? (
                                                        <Spinner
                                                            variant="dots"
                                                            color="white"
                                                            classNames={{
                                                                wrapper:
                                                                    'translate-y-0 items-center',
                                                            }}
                                                        />
                                                    ) : (
                                                        <DeleteIcon />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </DrawerBody>
                            <DrawerFooter className="flex flex-col shadow-[0px_-7px_14px_-6px_rgba(0,_0,_0,_0.1)]">
                                <div className="flex flex-col space-y-3 mb-4">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-lg text-gray-500">
                                            Subtotal
                                        </span>
                                        <span className="tracking-wider text-lg">
                                            ${subtotal}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-lg text-gray-500">
                                            Tax(7.5%)
                                        </span>
                                        <span className="tracking-wider text-lg">
                                            ${tax}
                                        </span>
                                    </div>
                                    <Divider />
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-lg text-gray-500">
                                            Total
                                        </span>
                                        <span className="tracking-wider text-lg">
                                            ${total}
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    className="bg-black text-xl text-white"
                                    size="lg"
                                    radius="full"
                                    onPress={onClose}
                                >
                                    Checkout
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
