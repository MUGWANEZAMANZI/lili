function Home() {
    return (
        <>
            <div className="w-full h-[535px] flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col order-2 sm:order-1 p-52">
                    <p className="text-4xl md:text-2xl">Clothes and shoes</p>
                    
                    <p><img src="shopNow.png" width={303} height={66}/></p>
                </div>
                <div className="flex flex-col order-1 sm:order-2">
                    <div className="flex justify-between">
                        <img src="/head.png" width={77} height={75}/>
                        <img src="/heart.png" width={77} height={75}/>
                    </div>
                    <img src="/main.png" width="471" height="453"/>
                </div>
                </div>
                <div className="w-full h-[1277] flex justify-between">
                    <div>
                        <img src="/bag.png" width={358} height={207} />
                    </div>
                    <div>
                        <img src="/Shoes.png" width={358} height={207} />
                    </div>
                    <div>
                        <img src="/dress.png" width={358} height={207} />
                    </div>
                </div>
            
        </>
    );
}

export default Home;
