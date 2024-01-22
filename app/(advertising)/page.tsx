import Features from "./_components/features";
import Hero from "./_components/hero";
import Illustration from "./_components/illustration";

const AdvertisingPage = () => {
    return (
        <div className="md:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 align-center justify-center">
                <Hero />
                <Illustration />
            </div>
            <div className="border-dashed border-r-4 border-gray-200">
                <Features />
            </div>
        </div>
    );
};

export default AdvertisingPage;