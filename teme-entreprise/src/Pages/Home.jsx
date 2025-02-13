function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full min-h-[535px] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16 p-20">
                {/* Left Content */}
                <div className="flex flex-col order-2 sm:order-1 text-center sm:text-left">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold">Clothes and Shoes</p>
                    <div className="mt-4">
                        <img src="shopNow.png" alt="Shop Now" className="w-48 sm:w-[303px] h-auto"/>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col order-1 sm:order-2 items-center">
                    <div className="flex justify-between w-full max-w-xs sm:max-w-sm mb-4">
                        <img src="/head.png" alt="Head Icon" className="w-16 h-16"/>
                        <img src="/heart.png" alt="Heart Icon" className="w-16 h-16"/>
                    </div>
                    <img src="/main.png" alt="Main Image" className="w-full max-w-[471px] h-auto"/>
                </div>
            </div>

            {/* Product Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 sm:px-16 py-6">
                <div className="flex justify-center">
                    <img src="/bag.png" alt="Bag" className="w-full max-w-xs sm:max-w-sm h-auto"/>
                </div>
                <div className="flex justify-center">
                    <img src="/Shoes.png" alt="Shoes" className="w-full max-w-xs sm:max-w-sm h-auto"/>
                </div>
                <div className="flex justify-center">
                    <img src="/dress.png" alt="Dress" className="w-full max-w-xs sm:max-w-sm h-auto"/>
                </div>
            </div>
        </>
    );
}

export default Home;
