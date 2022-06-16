import Image from "next/image";

function Brands () {
    return(
        <section className="flex flex-col md:flex-row justify-center
        items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
            <div className="brand group relative">
                <Image src="/images/disnep.png" layout="fill" objectFit="cover" 
                />
                <video autoPlay loop playsInline className="hidden group-hover:inline
                rounded-lg object-cover">
                    <source src="/videos/disney.mp4" />
                </video>
            </div>
        </section>
    );
}

export default Brands;