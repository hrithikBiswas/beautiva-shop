'use client';
import { useAuth } from '@/hooks';
import useProduct from '@/hooks/useProduct';
import { isExistCategory } from '@/utils/actions';
import { addToast } from '@heroui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const categoryPage = () => {
    const { loading, setLoading } = useAuth();
    const { categories, refreshcategory } = useProduct();

    const formik = useFormik({
        initialValues: {
            name: '',
            slug: '',
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be 3 characters or more')
                .required('Category cannot be empty!'),
            slug: Yup.string()
                .min(3, 'Must be 3 characters or more')
                .required('Slug cannot be empty!'),
            description: Yup.string(),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);

            const categoryExists = categories.some(
                (item) => item.name === values.name
            );

            if (categoryExists) {
                setLoading(false);
                resetForm();
                return addToast({
                    title: 'Category Status',
                    description: 'Category already exists!',
                    color: 'danger',
                    radius: 'sm',
                    hideCloseButton: true,
                    timeout: 3000,
                    shouldShowTimeoutProgress: true,
                });
            }

            const res = await fetch('/api/category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    values,
                }),
            });

            const { message } = await res.json();

            setLoading(false);
            resetForm();

            await refreshcategory();

            return addToast({
                title: 'Category Status',
                description: message,
                color: 'success',
                radius: 'sm',
                hideCloseButton: true,
                timeout: 3000,
                shouldShowTimeoutProgress: true,
            });
        },
    });

    return (
        <div className="flex-1 p-8 dark:bg-gray-950">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Add New Category
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Create a new product category for your store
                    </p>
                </div>
                <div className="flex">
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition flex items-center">
                        <i className="fas fa-list mr-2"></i>View Categories
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="">
                    <div className="bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <form
                            id="categoryForm"
                            onSubmit={formik.handleSubmit}
                            className="text-gray-700 dark:text-gray-200"
                        >
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Category Name *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-tag text-gray-400"></i>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className="w-full pl-4 pr-4 py-3  outline-none border border-gray-300 dark:border-gray-700 rounded-lg  focus:border-blue-500 transition"
                                        placeholder="Enter category name"
                                    />
                                </div>
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.name}
                                    </div>
                                ) : null}
                                <p className="mt-1 text-sm text-gray-500">
                                    This will be displayed as the category title
                                </p>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="slug"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Slug *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-link text-gray-400"></i>
                                    </div>
                                    <input
                                        type="text"
                                        id="slug"
                                        name="slug"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.slug}
                                        className="w-full pl-4 pr-4 py-3  outline-none border border-gray-300 dark:border-gray-700 rounded-lg  focus:border-blue-500 transition"
                                        placeholder="category-slug"
                                    />
                                </div>
                                {formik.touched.slug && formik.errors.slug ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.slug}
                                    </div>
                                ) : null}
                                <p className="mt-1 text-sm text-gray-500">
                                    Unique URL-friendly identifier for the
                                    category
                                </p>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium mb-2"
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
                                    className="w-full px-4 py-3  outline-none border border-gray-300 dark:border-gray-700 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="Enter category description (optional)"
                                ></textarea>
                                <p className="mt-1 text-sm text-gray-500">
                                    Brief description of what this category
                                    contains
                                </p>
                            </div>

                            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    type="reset"
                                    className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition font-medium"
                                >
                                    Reset Form
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-primary-500 cursor-pointer text-white rounded-lg hover:bg-primary-600 transition font-medium flex items-center"
                                >
                                    {loading
                                        ? 'Creating Category...'
                                        : 'Create Category'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default categoryPage;
