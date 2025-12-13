import { DeleteIcon, MinusIcon, PlusIcon, SearchIcon } from '@/components/SVG';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from '@heroui/react';
import SearchBar from './SearchBar';
import { useSearchParams } from 'next/navigation';
import useProduct from '@/hooks/useProduct';
import Image from 'next/image';

export default function Search() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { products } = useProduct();

    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';

    const filteredProduct = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    });

    console.log(filteredProduct);

    return (
        <>
            <Button
                onPress={onOpen}
                className="min-w-6 min-h-6 p-0 bg-transparent"
            >
                <SearchIcon />
            </Button>
            <Drawer
                backdrop="blur"
                isOpen={isOpen}
                hideCloseButton={true}
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
                <DrawerContent className="bg-white text-black dark:bg-gray-950 dark:text-white dark:border-l dark:border-gray-700">
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1 border-b border-gray-300 py-4">
                                <SearchBar />
                            </DrawerHeader>
                            <DrawerBody>
                                {filteredProduct.length === 0 && (
                                    <p className="text-xl text-gray-500">
                                        No products found!
                                    </p>
                                )}
                                {filteredProduct.map((product) => (
                                    <div
                                        key={product?.id}
                                        className="flex gap-3 ring ring-gray-200 dark:ring-gray-500 shadow-md rounded-lg p-2"
                                    >
                                        <Image
                                            src={product?.image}
                                            alt={product?.name}
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            width={90}
                                            height={90}
                                        />

                                        <div className="flex-1 flex flex-col gap-1 items-start">
                                            <h3 className="font-semibold text-gray-700 dark:text-gray-200 capitalize leading-5">
                                                {product?.name}
                                            </h3>
                                            <span className="text-gray-700 dark:text-gray-200 text-sm">
                                                {product?.category}
                                            </span>
                                            <div className="flex items-center border border-gray-300 rounded-md">
                                                <Button
                                                    // onPress={() =>
                                                    //     debouncedDecrementProductQtyInCart(
                                                    //         cartId,
                                                    //         qty
                                                    //     )
                                                    // }
                                                    radius="none"
                                                    variant="light"
                                                    className="p-2 rounded-s-md hover:bg-gray-200 cursor-pointer min-w-0 h-fit"
                                                >
                                                    <MinusIcon className="w-4 h-4 text-gray-600 dark:text-white" />
                                                </Button>

                                                <input
                                                    name="qty"
                                                    type="number"
                                                    // value={qty}
                                                    value={1}
                                                    // max={product?.stock}
                                                    readOnly
                                                    className="w-10 text-center text-base border-0 outline-none focus:ring-0"
                                                />
                                                <Button
                                                    // onPress={() =>
                                                    //     debouncedIncrementProductQtyInCart(
                                                    //         cartId,
                                                    //         qty
                                                    //     )
                                                    // }
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
                                                {/* ${qty * product?.price} */}
                                                10
                                            </h2>
                                            <Button
                                                color="danger"
                                                radius="full"
                                                variant="shadow"
                                                className="min-w-fit h-fit p-2 me-1"
                                                // isDisabled={
                                                //     cartLoadingId === cartId
                                                // }
                                                // onPress={() =>
                                                //     removeCart(cartId)
                                                // }
                                            >
                                                {/* {cartLoadingId ===
                                                    cartId ? (
                                                        <Spinner
                                                            variant="dots"
                                                            color="white"
                                                            classNames={{
                                                                wrapper:
                                                                    'translate-y-0 items-center',
                                                            }}
                                                        />
                                                    ) : ( */}
                                                <DeleteIcon />
                                                {/* )} */}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
