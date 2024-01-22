import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const AdvertisingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-screen bg-slate-100">
            <Navbar />
            <main className="md:pt-16 pt-28 pb-2 bg-slate-100">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AdvertisingLayout;