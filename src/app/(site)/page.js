import Footer from "@/components/footer";
import BlogSection from "@/components/Home/BlogSection";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Hero from "@/components/Home/Hero";
import NewCollection from "@/components/Home/NewCollection";
import NewsLetter from "@/components/Home/NewsLetter";
import ShopByCategory from "@/components/Home/ShopByCategory";
import ShopCollection from "@/components/Home/ShopCollection";
import Testimonial from "@/components/Home/Testimonial";
import { getProducts } from "@/utils/actions";

export default async function Home() {
    const products = await getProducts();

    return (
        <div className="container">
            <Hero />
            <FeaturedProducts products={products} />
            <ShopByCategory />
            <NewCollection />
            <ShopCollection products={products} />
            <BlogSection />
            {/* slider */}
            <Testimonial />
            {/* Stay Up to Date with All News and Exclusive Offers */}
            <NewsLetter />
            {/* Follow Us on */}
            {/* footer */}
            <Footer />
        </div>
    );
}
