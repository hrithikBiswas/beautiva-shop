'use client';

import { useRef, useState } from 'react';
import { DeleteIcon } from '@/components/SVG';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addPost, uploadPostImage } from '@/utils/actions';
import { useAuth } from '@/hooks';
import { addToast, Switch } from '@heroui/react';
import useProduct from '@/hooks/useProduct';
const BlogPage = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [isPublished, setIsPublished] = useState(true);
    const fileRef = useRef(null);
    const { loading, setLoading, user } = useAuth();
    const { products } = useProduct();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            productName: '',
            title: '',
            slug: '',
            content: '',
            image: '',
            published: true,
            userId: user?.id,
        },
        validationSchema: Yup.object({
            productName: Yup.string().required('Required'),
            title: Yup.string().required('Required'),
            slug: Yup.string().required('Required'),
            content: Yup.string(),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true);
                const imageUrl = await uploadPostImage(values.image);

                const payload = {
                    ...values,
                    image: imageUrl,
                };

                const res = await fetch('/api/blog', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ payload }),
                });

                const { message, success } = await res.json();

                resetPostForm();

                return addToast({
                    title: 'Post Status',
                    description: message,
                    color: success ? 'success' : 'danger',
                    radius: 'sm',
                    hideCloseButton: true,
                    timeout: 3000,
                    shouldShowTimeoutProgress: true,
                });
            } catch (error) {
                console.error('Error adding blog post:', error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
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
    };

    const removeImage = () => {
        fileRef.current.value = '';
        setImagePreview(null);
        formik.setFieldValue('image', '');
    };

    const resetPostForm = () => {
        formik.resetForm();
        setIsPublished(true);
        setImagePreview(null);
        fileRef.current.value = '';
    };

    return (
        <div className="flex-1 p-8 dark:bg-gray-950 mt-10 sm:mt-0">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Create New Post
                </h2>
            </div>

            <div className="bg-white dark:bg-black rounded-xl shadow-md p-6 mb-6">
                <form id="postForm" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 text-gray-700 dark:text-gray-200">
                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="productName"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Product Name
                                </label>
                                <select
                                    id="productName"
                                    name="productName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.productName}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                >
                                    <option value="">
                                        Select Product Name
                                    </option>
                                    {products.map(({ name, id }) => {
                                        return (
                                            <option key={id} value={name}>
                                                {name}
                                            </option>
                                        );
                                    })}
                                </select>
                                {formik.touched.productName &&
                                formik.errors.productName ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.productName}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Post Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="Enter post title"
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.title}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <label
                                    htmlFor="slug"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Slug (Unique URL Path)
                                </label>
                                <input
                                    type="text"
                                    id="slug"
                                    name="slug"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.slug}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="post-slug"
                                />
                                {formik.touched.slug && formik.errors.slug ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.slug}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="content"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Post Content (Optional)
                                </label>
                                <textarea
                                    id="content"
                                    name="content"
                                    rows="4"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.content}
                                    className="w-full px-4 py-2 outline-none border border-gray-300 rounded-lg  focus:border-blue-500 transition"
                                    placeholder="Enter post content"
                                ></textarea>
                            </div>

                            <div className="flex flex-wrap gap-5">
                                <div>
                                    <p className="text-sm font-medium mb-2">
                                        Upload Image
                                    </p>

                                    <div className="w-full">
                                        <label
                                            htmlFor="image"
                                            className="flex flex-col items-center justify-center w-64 h-48 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
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
                                                ref={fileRef}
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
                            </div>

                            <div className="flex items-center">
                                <Switch
                                    name="published"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.published}
                                    isSelected={isPublished}
                                    onValueChange={setIsPublished}
                                >
                                    {isPublished ? 'Published' : 'Draft'}
                                </Switch>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={resetPostForm}
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
                            {loading ? 'Adding Post...' : 'Add Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogPage;
