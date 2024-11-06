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
      <div className="flex gap-10 text-lg">
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/snippets">Snippets</Link>
      </div>
    </div>
  );
};

export default Header;
