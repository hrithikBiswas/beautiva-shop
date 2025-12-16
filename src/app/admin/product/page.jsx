'use client';

import { useRef, useState } from 'react';
import { DeleteIcon } from '@/components/SVG';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploadProductImage } from '@/utils/actions';
import { useAuth } from '@/hooks';
import { addToast } from '@heroui/react';
import useProduct from '@/hooks/useProduct';

const AdminPage = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [hoverImagePreview, setHoverImagePreview] = useState(null);
    const imageFileRef = useRef(null);
    const hoverFileRef = useRef(null);
    const { loading, setLoading, user } = useAuth();
    const { categories } = useProduct();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            productName: '',
            description: '',
            price: '',
            image: '',
            hoverImage: '',
            stock: '',
            category: '',
            featured: false,
            userId: user?.id,
        },
        validationSchema: Yup.object({
            productName: Yup.string()
                .min(4, 'Must be 4 characters or more')
                .required('Required'),
            description: Yup.string(),
            price: Yup.number().required('Required').positive().integer(),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            const imageUrl = await uploadProductImage(values.image);
            const hoverImageUrl = await uploadProductImage(values.hoverImage);

            const payload = {
                ...values,
                image: imageUrl,
                hoverImage: hoverImageUrl,
            };

            const res = await fetch('/api/product', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ payload }),
            });

            const { message, success } = await res.json();

            setLoading(false);
            resetForm();
            setImagePreview(null);
            setHoverImagePreview(null);
            imageFileRef.current.value = '';
            hoverFileRef.current.value = '';

            return addToast({
                title: 'Product Status',
                description: message,
                color: success ? 'success' : 'danger',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        },
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (e.target.name === 'image') {
            formik.setFieldValue('image', file);

            const previewImageUrl = URL.createObjectURL(file);
            setImagePreview(previewImageUrl);
        }
        if (e.target.name === 'hoverImage') {
            formik.setFieldValue('hoverImage', file);

            const previewHoverImageUrl = URL.createObjectURL(file);
            setHoverImagePreview(previewHoverImageUrl);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        formik.setFieldValue('image', '');
        imageFileRef.current.value = '';
    };
    const removeHoverImage = () => {
        setHoverImagePreview(null);
        formik.setFieldValue('hoverImage', '');
        hoverFileRef.current.value = '';
    };

    return (
        <div className="flex-1 p-8 dark:bg-gray-950 mt-10 sm:mt-0">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Add New Product
                </h2>
                <div className="flex">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        <i className="fas fa-eye mr-2"></i>View Products
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-black rounded-xl shadow-md p-6 mb-6">
                <form id="productForm" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="productName"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Product Name *
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.productName}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="Enter product name"
                                />
                                {formik.touched.productName &&
                                formik.errors.productName ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.productName}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="Enter product description"
                                ></textarea>
                            </div>

                            <div>
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Price *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">$</span>
                                    </div>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        step="1.00"
                                        min="0"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.price}
                                        className="w-full pl-8 pr-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                        placeholder="0.00"
                                    />
                                </div>
                                {formik.touched.price && formik.errors.price ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.price}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="stock"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    min="0"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.stock}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="Enter stock quantity"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.category}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => {
                                        const { name, slug } = category;
                                        return (
                                            <option key={slug} value={name}>
                                                {name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="flex flex-wrap gap-5">
                                <div>
                                    <p className="text-sm font-medium mb-2">
                                        Upload Image
                                    </p>

                                    <div className="w-full">
                                        <label
                                            htmlFor="image"
                                            className="flex flex-col items-center justify-center w-48 h-64 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                        >
                                            {imagePreview ? (
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="h-full w-full object-cover rounded-xl"
                                                />
                                            ) : (
                                                <div className="text-center">
                                                    <p className="text-gray-600 font-medium">
                                                        Click to upload image
                                                    </p>
                                                    <p className="text-sm text-gray-400">
                                                        PNG, JPG, JPEG
                                                    </p>
                                                </div>
                                            )}

                                            <input
                                                ref={imageFileRef}
                                                id="image"
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                        </label>

                                        {imagePreview && (
                                            <button
                                                onClick={removeImage}
                                                className="flex items-center justify-center gap-1.5 mt-3 w-full py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                            >
                                                <DeleteIcon />{' '}
                                                <span>Remove Image</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-2">
                                        Upload Hover Image
                                    </p>

                                    <div className="w-full">
                                        <label
                                            htmlFor="hoverImage"
                                            className="flex flex-col items-center justify-center w-48 h-64 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                        >
                                            {hoverImagePreview ? (
                                                <img
                                                    src={hoverImagePreview}
                                                    alt="Preview"
                                                    className="h-full w-full object-cover rounded-xl"
                                                />
                                            ) : (
                                                <div className="text-center">
                                                    <p className="text-gray-600 font-medium">
                                                        Click to upload image
                                                    </p>
                                                    <p className="text-sm text-gray-400">
                                                        PNG, JPG, JPEG
                                                    </p>
                                                </div>
                                            )}

                                            <input
                                                ref={hoverFileRef}
                                                id="hoverImage"
                                                name="hoverImage"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                        </label>

                                        {hoverImagePreview && (
                                            <button
                                                onClick={removeHoverImage}
                                                className="flex items-center justify-center gap-1.5 mt-3 w-full py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                            >
                                                <DeleteIcon />{' '}
                                                <span>Remove Image</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    name="featured"
                                    checked={formik.values.featured}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.featured}
                                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="featured"
                                    className="ml-2 text-sm font-medium"
                                >
                                    Feature this product
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
                        <button
                            type="reset"
                            className="px-6 py-2 border border-gray-300 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                        >
                            Reset Form
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-2 ${
                                loading
                                    ? 'bg-blue-400'
                                    : 'bg-blue-500 hover:bg-blue-600'
                            }  text-white rounded-lg  transition flex items-center cursor-pointer`}
                        >
                            {loading ? 'Adding Product...' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>

            <div
                id="successMessage"
                className="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
            >
                <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>Product added successfully!</span>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
