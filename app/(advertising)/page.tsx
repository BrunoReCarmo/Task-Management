import Hero from "./_components/hero";
import Illustration from "./_components/illustration";

const AdvertisingPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 align-center justify-center">
                <Hero />
                <Illustration />
            </div>
        </>
    );
};

export default AdvertisingPage;