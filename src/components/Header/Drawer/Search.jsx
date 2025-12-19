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
import Link from 'next/link';

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
                // hideCloseButton={true}
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
                            <DrawerHeader className="flex flex-col gap-1 border-b border-gray-300 py-4 mr-4">
                                <SearchBar />
                            </DrawerHeader>
                            <DrawerBody className="py-5">
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
                                        <Link
                                            href={`/products/${product?.id}`}
                                            onClick={onClose}
                                        >
                                            <Image
                                                src={product?.image}
                                                alt={product?.name}
                                                className="w-[90px] h-[90px] object-cover rounded-lg"
                                                width={90}
                                                height={90}
                                            />
                                        </Link>

                                        <div className="flex-1 flex flex-col gap-1 items-start">
                                            <Link
                                                href={`/products/${product?.id}`}
                                                className="font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-200 capitalize leading-5 transition-all duration-200"
                                                onClick={onClose}
                                            >
                                                {product?.name}
                                            </Link>
                                            <span className="text-gray-700 dark:text-gray-200 text-sm">
                                                {product?.category}
                                            </span>
                                            <span className="text-gray-700 dark:text-gray-200 text-sm">
                                                Stock: {product?.stock}
                                            </span>
                                        </div>

                                        <div className="flex flex-col justify-around">
                                            <h2 className="text-fuchsia-900 text-2xl font-semibold">
                                                ${product?.price}
                                            </h2>
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
