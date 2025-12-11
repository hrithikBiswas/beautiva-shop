// import React from 'react';

// const BlogPage = () => {
//     return (
//         <div className="container">
//             <main class="container mx-auto px-4 py-8">
//                 <section class="mb-12">
//                     <div class="gradient-bg rounded-2xl p-8 md:p-12">
//                         <div class="max-w-2xl">
//                             <span class="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
//                                 Latest Trends
//                             </span>
//                             <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                                 Style Insights: Your Fashion Journey
//                             </h1>
//                             <p class="text-lg text-gray-700 mb-6">
//                                 Discover the latest fashion trends, styling
//                                 tips, and product reviews from our style
//                                 experts.
//                             </p>
//                             <a
//                                 href="#featured"
//                                 class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
//                             >
//                                 Explore Articles
//                                 <i class="fas fa-arrow-right ml-2"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </section>

//                 <section id="featured" class="mb-16">
//                     <div class="flex justify-between items-center mb-8">
//                         <h2 class="text-3xl font-bold text-gray-900">
//                             Featured Articles
//                         </h2>
//                         <a
//                             href="#"
//                             class="text-indigo-600 hover:text-indigo-800 font-medium"
//                         >
//                             View All <i class="fas fa-arrow-right ml-1"></i>
//                         </a>
//                     </div>

//                     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <article class="blog-card bg-white rounded-xl overflow-hidden shadow-md">
//                             <div class="h-48 overflow-hidden">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//                                     alt="Summer Fashion Trends"
//                                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>
//                             <div class="p-6">
//                                 <div class="flex items-center text-sm text-gray-500 mb-3">
//                                     <span>Fashion Trends</span>
//                                     <span class="read-time">5 min read</span>
//                                 </div>
//                                 <h3 class="text-xl font-bold text-gray-900 mb-3">
//                                     Top 10 Summer Fashion Trends for 2023
//                                 </h3>
//                                 <p class="text-gray-600 mb-4">
//                                     Discover the must-have styles and colors
//                                     that will dominate this summer's fashion
//                                     scene.
//                                 </p>
//                                 <div class="flex items-center justify-between">
//                                     <div class="flex items-center">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
//                                             alt="Author"
//                                             class="w-8 h-8 rounded-full mr-3"
//                                         />
//                                         <span class="text-sm font-medium">
//                                             Emma Wilson
//                                         </span>
//                                     </div>
//                                     <a
//                                         href="#"
//                                         class="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
//                                     >
//                                         Read More
//                                     </a>
//                                 </div>
//                             </div>
//                         </article>

//                         <article class="blog-card bg-white rounded-xl overflow-hidden shadow-md">
//                             <div class="h-48 overflow-hidden">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//                                     alt="Sustainable Fashion"
//                                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>
//                             <div class="p-6">
//                                 <div class="flex items-center text-sm text-gray-500 mb-3">
//                                     <span>Sustainability</span>
//                                     <span class="read-time">7 min read</span>
//                                 </div>
//                                 <h3 class="text-xl font-bold text-gray-900 mb-3">
//                                     How to Build a Sustainable Wardrobe
//                                 </h3>
//                                 <p class="text-gray-600 mb-4">
//                                     Learn practical tips for making eco-friendly
//                                     fashion choices without compromising on
//                                     style.
//                                 </p>
//                                 <div class="flex items-center justify-between">
//                                     <div class="flex items-center">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
//                                             alt="Author"
//                                             class="w-8 h-8 rounded-full mr-3"
//                                         />
//                                         <span class="text-sm font-medium">
//                                             James Rodriguez
//                                         </span>
//                                     </div>
//                                     <a
//                                         href="#"
//                                         class="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
//                                     >
//                                         Read More
//                                     </a>
//                                 </div>
//                             </div>
//                         </article>

//                         <article class="blog-card bg-white rounded-xl overflow-hidden shadow-md">
//                             <div class="h-48 overflow-hidden">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//                                     alt="Accessories"
//                                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>
//                             <div class="p-6">
//                                 <div class="flex items-center text-sm text-gray-500 mb-3">
//                                     <span>Accessories</span>
//                                     <span class="read-time">4 min read</span>
//                                 </div>
//                                 <h3 class="text-xl font-bold text-gray-900 mb-3">
//                                     Accessorizing Like a Pro: A Complete Guide
//                                 </h3>
//                                 <p class="text-gray-600 mb-4">
//                                     Transform any outfit with the right
//                                     accessories. Our expert shares her top
//                                     styling secrets.
//                                 </p>
//                                 <div class="flex items-center justify-between">
//                                     <div class="flex items-center">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//                                             alt="Author"
//                                             class="w-8 h-8 rounded-full mr-3"
//                                         />
//                                         <span class="text-sm font-medium">
//                                             Sophia Chen
//                                         </span>
//                                     </div>
//                                     <a
//                                         href="#"
//                                         class="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
//                                     >
//                                         Read More
//                                     </a>
//                                 </div>
//                             </div>
//                         </article>
//                     </div>
//                 </section>

//                 <div class="flex flex-col lg:flex-row gap-12">
//                     <div class="lg:w-2/3">
//                         <div class="mb-8">
//                             <h2 class="text-3xl font-bold text-gray-900 mb-8">
//                                 Latest Articles
//                             </h2>

//                             <article class="blog-card bg-white rounded-xl overflow-hidden shadow-md mb-8">
//                                 <div class="md:flex">
//                                     <div class="md:w-2/5 overflow-hidden">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//                                             alt="Minimalist Wardrobe"
//                                             class="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
//                                         />
//                                     </div>
//                                     <div class="md:w-3/5 p-6">
//                                         <div class="flex items-center text-sm text-gray-500 mb-3">
//                                             <span>Lifestyle</span>
//                                             <span class="read-time">
//                                                 6 min read
//                                             </span>
//                                             <span class="read-time">
//                                                 Jun 15, 2023
//                                             </span>
//                                         </div>
//                                         <h3 class="text-2xl font-bold text-gray-900 mb-3">
//                                             The Art of a Minimalist Wardrobe
//                                         </h3>
//                                         <p class="text-gray-600 mb-4">
//                                             Less is more when it comes to
//                                             building a versatile wardrobe.
//                                             Discover how to create a capsule
//                                             collection that works for every
//                                             occasion.
//                                         </p>
//                                         <div class="flex items-center justify-between">
//                                             <div class="flex items-center">
//                                                 <img
//                                                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
//                                                     alt="Author"
//                                                     class="w-8 h-8 rounded-full mr-3"
//                                                 />
//                                                 <span class="text-sm font-medium">
//                                                     Michael Lee
//                                                 </span>
//                                             </div>
//                                             <a
//                                                 href="#"
//                                                 class="text-indigo-600 hover:text-indigo-800 font-medium"
//                                             >
//                                                 Read Full Article
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </article>

//                             <article class="blog-card bg-white rounded-xl overflow-hidden shadow-md mb-8">
//                                 <div class="md:flex">
//                                     <div class="md:w-2/5 overflow-hidden">
//                                         <img
//                                             src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
//                                             alt="Work From Home Style"
//                                             class="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
//                                         />
//                                     </div>
//                                     <div class="md:w-3/5 p-6">
//                                         <div class="flex items-center text-sm text-gray-500 mb-3">
//                                             <span>Workwear</span>
//                                             <span class="read-time">
//                                                 5 min read
//                                             </span>
//                                             <span class="read-time">
//                                                 Jun 10, 2023
//                                             </span>
//                                         </div>
//                                         <h3 class="text-2xl font-bold text-gray-900 mb-3">
//                                             Work From Home Style That Still
//                                             Makes an Impression
//                                         </h3>
//                                         <p class="text-gray-600 mb-4">
//                                             Even when working remotely, your
//                                             style matters. Learn how to dress
//                                             for success during video calls and
//                                             virtual meetings.
//                                         </p>
//                                         <div class="flex items-center justify-between">
//                                             <div class="flex items-center">
//                                                 <img
//                                                     src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
//                                                     alt="Author"
//                                                     class="w-8 h-8 rounded-full mr-3"
//                                                 />
//                                                 <span class="text-sm font-medium">
//                                                     Olivia Parker
//                                                 </span>
//                                             </div>
//                                             <a
//                                                 href="#"
//                                                 class="text-indigo-600 hover:text-indigo-800 font-medium"
//                                             >
//                                                 Read Full Article
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </article>
//                         </div>
//                     </div>

//                     <div class="lg:w-1/3">
//                         <div class="bg-white rounded-xl shadow-md p-6 mb-8">
//                             <h3 class="text-xl font-bold text-gray-900 mb-4">
//                                 Categories
//                             </h3>
//                             <ul class="space-y-3">
//                                 <li>
//                                     <a
//                                         href="#"
//                                         class="flex justify-between items-center text-gray-700 hover:text-indigo-600"
//                                     >
//                                         <span>Fashion Trends</span>
//                                         <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                                             24
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="#"
//                                         class="flex justify-between items-center text-gray-700 hover:text-indigo-600"
//                                     >
//                                         <span>Style Guides</span>
//                                         <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                                             18
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="#"
//                                         class="flex justify-between items-center text-gray-700 hover:text-indigo-600"
//                                     >
//                                         <span>Sustainability</span>
//                                         <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                                             12
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="#"
//                                         class="flex justify-between items-center text-gray-700 hover:text-indigo-600"
//                                     >
//                                         <span>Product Reviews</span>
//                                         <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                                             9
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="#"
//                                         class="flex justify-between items-center text-gray-700 hover:text-indigo-600"
//                                     >
//                                         <span>Accessories</span>
//                                         <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
//                                             15
//                                         </span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md p-6 mb-8">
//                             <h3 class="text-xl font-bold text-white mb-3">
//                                 Subscribe to Our Newsletter
//                             </h3>
//                             <p class="text-indigo-100 mb-5">
//                                 Get weekly style tips and exclusive offers
//                                 straight to your inbox.
//                             </p>
//                             <form class="space-y-3">
//                                 <input
//                                     type="email"
//                                     placeholder="Your email address"
//                                     class="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
//                                 />
//                                 <button
//                                     type="submit"
//                                     class="w-full bg-white text-indigo-600 font-medium py-3 rounded-lg hover:bg-gray-100 transition duration-300"
//                                 >
//                                     Subscribe
//                                 </button>
//                             </form>
//                         </div>

//                         <div class="bg-white rounded-xl shadow-md p-6">
//                             <h3 class="text-xl font-bold text-gray-900 mb-4">
//                                 Popular Tags
//                             </h3>
//                             <div class="flex flex-wrap gap-2">
//                                 <a
//                                     href="#"
//                                     class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800"
//                                 >
//                                     Summer
//                                 </a>
//                                 <a
//                                     href="#"
//                                     class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800"
//                                 >
//                                     Minimalist
//                                 </a>
//                                 <a
//                                     href="#"
//                                     class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800"
//                                 >
//                                     Eco-Friendly
//                                 </a>
//                                 <a
//                                     href="#"
//                                     class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800"
//                                 >
//                                     Workwear
//                                 </a>
//                                 <a
//                                     href="#"
//                                     class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800"
//                                 >
//                                     Accessories
//                                 </a>
//                                 <a
//                                     href="#"
//                                     class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-800"
//                                 >
//                                     Trends 2023
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default BlogPage;
