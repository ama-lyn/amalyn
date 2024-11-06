import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <div className="flex justify-between py-6">
      <div>
        <Link href="/">
          <div className="avatar rounded-full min-h-12 min-w-12 bg-[#FF1493] text-white  font-[700] flex items-center justify-center">
            <p>GA</p>
          </div>
        </Link>
      </div>
      <div className="flex gap-16 text-lg ">
        <Link href="/about" className="hover:text-[#FF1493]">About</Link>
        <Link href="/blogs" className="hover:text-[#FF1493]">Blogs</Link>
        <Link href="/projects" className="hover:text-[#FF1493]">Projects</Link>
        <Link href="/snippets" className="hover:text-[#FF1493]">Snippets</Link>
      </div>
    </div>
  );
};

export default Header;
