import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Hero from '@/components/Home/Hero';
import NewCollection from '@/components/Home/NewCollection';
import ShopByCategory from '@/components/Home/ShopByCategory';
import ShopCollection from '@/components/Home/ShopCollection';

export default function Home() {
    return (
        <div className="container">
            <Hero />
            <FeaturedProducts />
            <ShopByCategory />
            <NewCollection />
            <ShopCollection />
            {/* From Our Blog */}
            {/* slider */}
            {/* Stay Up to Date with All News and Exclusive Offers */}
            {/* Follow Us on */}
            {/* footer */}
        </div>
    );
}
