import Image from "next/image";

const Illustration = () => {
    return (
        <div className="px-16 mt-2">
            <Image
                src="/character.png"
                alt="Character"
                width={450}
                height={450}
            />
        </div>
    );
};

export default Illustration;