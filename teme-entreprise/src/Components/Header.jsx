import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon package for the hamburger menu

function Header() {
    // State to toggle the mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="!bg-gray-900 p-1 shadow-md fixed w-full dark:bg-gray-900 dark:text-white">
            <nav className="container mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="text-white text-2xl font-bold">
                    <NavLink to="/" className="hover:text-gray-400 no-underline">
                        Teme Enterprise
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white md:hidden focus:outline-none"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu (hidden on small screens) */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li>
                        <NavLink to="/" className="text-white hover:text-gray-400 no-underline">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/clothes" className="text-white hover:text-gray-400 no-underline">
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shoes" className="text-white hover:text-gray-400 no-underline">
                         Shoes
                        </NavLink>
                    </li>
                    <li>
                        <input 
                            type="text"
                            placeholder="Search"
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </li>
                    
                    <li className="bg-white p-2 rounded-full">
                        
                        <img src="/cart.png" alt="cart" width={36} height={36}/>
                    </li>
                    <li><sup className="text-green-300 text-xl">+6</sup></li>
                </ul>
            </nav>

            {/* Mobile Menu (Shown when menuOpen is true) */}
            {menuOpen && (
                <ul className="md:hidden bg-gray-800 text-white flex flex-col space-y-4 p-4">
                    <li>
                        <NavLink to="/" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/clothes" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shoes" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Shoes
                        </NavLink>
                    </li>
                    <li>
                        <input 
                            type="text"
                            placeholder="Search"
                            className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </li>
                    <li className="flex justify-center">
                        <img src="/cart.png" alt="cart" width={36} height={36}/>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Header;
