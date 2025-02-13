import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Footer Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    
                    {/* Company Info */}
                    <div>
                        <h2 className="text-xl font-semibold">Teme Entreprise</h2>
                        <p className="text-gray-400 mt-2">
                            Providing the best fashion for you.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-semibold">Contact Us</h2>
                        <ul className="mt-2 space-y-2">
                            <li className="flex justify-center md:justify-start items-center space-x-2">
                                <Mail size={18} />
                                <a href="mailto:ishimwematemeparfaite@gmail.com" className="hover:underline">
                                    Email Us
                                </a>
                            </li>
                            <li className="flex justify-center md:justify-start items-center space-x-2">
                                <Phone size={18} />
                                <a href="https://wa.me/250787902373" className="hover:underline">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-xl font-semibold">Follow Us</h2>
                        <div className="flex justify-center md:justify-start space-x-4 mt-2">
                            <a href="#" className="hover:text-gray-400">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6 text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Teme Entreprise. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
