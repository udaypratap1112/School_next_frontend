import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-[15px] py-5 px-[1%] mx-[1%] bg-[#f7efe2]  rounded-2xl">
      <Link href="/" className="text-3xl font-bold text-[#01444E]"> Foodie </Link>
      
      <ul className="flex gap-5 text-xl">
        <Link href="/meals">Programs</Link>
        <Link href="/meals">Admissions</Link>
        <Link href="/community">Community</Link>
        <Link href="/community">Campus</Link>
        <Link href="/dashboard">Placements</Link>
      </ul>

      <div className="flex gap-5 items-center ">
        <p>Log In</p>
        <p className="border-[3px] px-5 py-2 rounded-3xl border-greenDark bg-greenDark text-white">Apply Now</p>
      </div>
    </div>
  );
};

export default Navbar;
