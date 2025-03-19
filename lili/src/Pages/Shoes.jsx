import { useState } from "react";

function Shoes() {
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
        setSelectedItem(null);
    };

    const shoesData = [
        { name: "Women's Shoe 1", img: "/s1.png", price: "10,000 FRW", phone: "250 788 706 386" },
        { name: "Women's Shoe 2", img: "/s2.png", price: "5,000 FRW", phone: "250 788 706 386" },
        { name: "Women's Shoe 3", img: "/s4.png", price: "5,000 FRW", phone: "+250 788 706 386" },
        { name: "Men's Shoe 1", img: "/s3.png", price: "10,000 FRW", phone: "+250 788 706 386" }
    ];

    return (
        <div className="p-20">
            <p className="underline font-bold text-lg">{"Women's Shoes"}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {shoesData.slice(0, 3).map((shoe, index) => (
                    <div key={index} className="text-center">
                        <img 
                            src={shoe.img} 
                            className="w-full max-w-[150px] mx-auto cursor-pointer hover:opacity-80 transition rounded-lg"
                            onClick={() => handleItemClick(shoe)}
                        />
                        <p className="text-sm font-semibold">{shoe.price}</p>
                    </div>
                ))}
            </div>

            <p className="underline font-bold text-lg mt-4">{"Men's Shoes"}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <div className="text-center">
                    <img 
                        src={shoesData[3].img} 
                        className="w-full max-w-[150px] mx-auto cursor-pointer hover:opacity-80 transition rounded-lg"
                        onClick={() => handleItemClick(shoesData[3])}
                    />
                    <p className="text-sm font-semibold">{shoesData[3].price}</p>
                </div>
            </div>

            {popupOpen && selectedItem && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm text-center">
                        <h2 className="text-lg font-semibold">Item Details</h2>
                        <p className="mt-2">🛍️ <strong>{selectedItem.name}</strong></p>
                        <p className="mt-2">💰 Price: <strong>{selectedItem.price}</strong></p>
                        <p className="mt-2">📞 Phone: 
                            <a href={`tel:${selectedItem.phone}`} className="text-blue-600 underline ml-1">
                                {selectedItem.phone}
                            </a>
                        </p>
                        <button
                            onClick={closePopup}
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shoes;
