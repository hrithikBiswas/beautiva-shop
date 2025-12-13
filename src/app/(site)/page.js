import BlogSection from '@/components/Home/BlogSection';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Hero from '@/components/Home/Hero';
import NewCollection from '@/components/Home/NewCollection';
import NewsLetter from '@/components/Home/NewsLetter';
import ShopByCategory from '@/components/Home/ShopByCategory';
import ShopCollection from '@/components/Home/ShopCollection';
import Testimonial from '@/components/Home/Testimonial';

export default async function Home() {
    return (
        <div className="container">
            <Hero />
            <FeaturedProducts />
            <ShopByCategory />
            <NewCollection />
            <ShopCollection />
            <BlogSection />
            {/* slider */}
            <Testimonial />
            {/* Stay Up to Date with All News and Exclusive Offers */}
            <NewsLetter />
        </div>
    );
}
