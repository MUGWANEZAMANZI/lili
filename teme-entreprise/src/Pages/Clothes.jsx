import { useState } from "react";

function Clothes() {
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

    const clothesData = {
        women: [
            { name: "Women's Dress 1", img: "/d1.png", price: "10,000 FRW", phone: "+250 787 902 373" },
            { name: "Women's Dress 2", img: "/d2.png", price: "5,000 FRW", phone: "+250 787 902 373" }
        ],
        men: [
            { name: "Men's Shirt 1", img: "/t2.png", price: "10,000 FRW", phone: "+250 787 902 373" }
        ],
        others: [
            { name: "Jumper", img: "/jumper1.png", price: "10,000 FRW", phone: "+250 787 902 373" },
            { name: "Skirt 1", img: "/skirt1.png", price: "5,000 FRW", phone: "+250 787 902 373" },
            { name: "Skirt 2", img: "/skirt2.png", price: "5,000 FRW", phone: "+250 787 902 373" },
            { name: "T-Shirt 1", img: "/t1.png", price: "5,000 FRW", phone: "+250 787 902 373" },
            { name: "T-Shirt 2", img: "/t3.png", price: "5,000 FRW", phone: "+250 787 902 373" }
        ]
    };

    return (
        <div className="container mx-auto p-4">
            {/* Women's Clothes */}
            <p className="underline font-bold text-lg">{"Women's Clothes"}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {clothesData.women.map((item, index) => (
                    <div key={index} className="text-center">
                        <img 
                            src={item.img} 
                            className="w-full max-w-[150px] mx-auto cursor-pointer hover:opacity-80 transition rounded-lg"
                            onClick={() => handleItemClick(item)}
                        />
                        <p className="text-sm font-semibold">{item.price}</p>
                    </div>
                ))}
            </div>

            {/* Men's Clothes */}
            <p className="underline font-bold text-lg mt-4">{"Men's Clothes"}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {clothesData.men.map((item, index) => (
                    <div key={index} className="text-center">
                        <img 
                            src={item.img} 
                            className="w-full max-w-[150px] mx-auto cursor-pointer hover:opacity-80 transition rounded-lg"
                            onClick={() => handleItemClick(item)}
                        />
                        <p className="text-sm font-semibold">{item.price}</p>
                    </div>
                ))}
            </div>

            {/* Other Clothes */}
            <p className="underline font-bold text-lg mt-4">Others</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
                {clothesData.others.map((item, index) => (
                    <div key={index} className="text-center">
                        <img 
                            src={item.img} 
                            className="w-full max-w-[150px] mx-auto cursor-pointer hover:opacity-80 transition rounded-lg"
                            onClick={() => handleItemClick(item)}
                        />
                        <p className="text-sm font-semibold">{item.price}</p>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {popupOpen && selectedItem && (
                <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm text-center">
                        <h2 className="text-lg font-semibold">Item Details</h2>
                        <img src={selectedItem.img} className="mx-auto my-2 w-32 h-32 object-cover rounded-md"/>
                        <p className="mt-2 text-lg font-bold">{selectedItem.name}</p>
                        <p className="mt-1 text-gray-700">💰 Price: <strong>{selectedItem.price}</strong></p>
                        <p className="mt-1 text-gray-700">📞 Phone: 
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

export default Clothes;
