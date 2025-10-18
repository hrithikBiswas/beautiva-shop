import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="my-24">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                <div className="col-span-3 md:col-span-2 flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold leading-10 max-w-[450px] md:max-w-[350px]">
                        Care for Your Skin, Care for Your Beauty
                    </h1>
                    <p className="text-gray-500 tracking-wide max-w-[480px] md:max-w-[380px]">
                        Smile with the reflection of the glow. Let your Skin
                        define your age and not the years
                    </p>
                </div>
                <div className="col-span-3 sm:col-span-1">
                    <h2 className="text-2xl font-semibold mb-3 sm:mb-5 tracking-wide">
                        Company
                    </h2>
                    <ul className="flex flex-col gap-3 md:gap-5 text-gray-500">
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">About Us</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Careers</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Store Locations</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Our Blog</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Reviews</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3 sm:col-span-1">
                    <h2 className="text-2xl font-semibold mb-3 sm:mb-5 tracking-wide">
                        Usefull Links
                    </h2>
                    <ul className="flex flex-col gap-3 md:gap-5 text-gray-500">
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">New Products</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Best Sellers</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Bundle & Sellers</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Online & Save</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Online Gift Card</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3 sm:col-span-1">
                    <h2 className="text-2xl font-semibold mb-3 sm:mb-5 tracking-wide">
                        Information
                    </h2>
                    <ul className="flex flex-col gap-3 md:gap-5 text-gray-500">
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Start A Return</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Contact Us</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Shipping FAQ</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Terms & Conditions</Link>
                        </li>
                        <li className="hover:text-gray-900 transition-colors duration-200">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
