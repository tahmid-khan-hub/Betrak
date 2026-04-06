"use client"

const Footer = () => {
    return (
        <div className="px-2 py-5 mt-19 bg-gray-900 text-gray-400 text-center">
            <div>
                &copy; {new Date().getFullYear()} Betrak™. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;