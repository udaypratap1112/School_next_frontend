import React from 'react';

function Header() {
  return (
    <header className="bg-neutral-900 text-white border-b p-4 flex justify-between items-center relative z-20" >
      <h1 className="text-xl font-semibold">Welcome to the Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <button className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
