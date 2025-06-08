import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Application</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );

}

export default Header;