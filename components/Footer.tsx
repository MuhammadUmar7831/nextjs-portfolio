import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-indigo-600 py-2">
            <div className="text-center text-white uppercase tracking-wider font-semibold">
                &copy; {new Date().getFullYear()} Muhammd Umar . All rights reserved .
            </div>
        </footer>
    );
}
