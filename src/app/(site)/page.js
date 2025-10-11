import FeaturedProducts from '@/components/Home/FeaturedProducts';
import Hero from '@/components/Home/Hero';
import ShopByCategory from '@/components/Home/ShopByCategory';

export default function Home() {
    return (
        <div className="container">
            <Hero />
            <FeaturedProducts />
            <ShopByCategory />
        </div>
    );
}
