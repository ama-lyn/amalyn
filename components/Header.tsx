"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  page: string;
}

const Header = () => {
  const NavItems: Array<NavItem> = [
    { label: "About", page: "/about" },
    { label: "Blog", page: "/blogs" },
    { label: "Projects", page: "/projects" },
    { label: "Snippets", page: "/snippets" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-opacity-70 bg-clip-padding blur-backdrop-filter">
      <div className="flex flex-wrap justify-between items-center py-6">
        <Link href="/">
          <div className="rounded-full min-h-12 min-w-12 bg-[#FF1493] text-white  font-[700] flex items-center justify-center">
            <p>GA</p>
          </div>
        </Link>
        <div className="hidden md:flex gap-16 text-lg">
          {NavItems.map((item: NavItem) => (
            <Link
              key={item.page}
              href={item.page}
              className={" hover:text-[#FF1493]"}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* MOBILE... */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 border-[1.5px] rounded-full "
            >
              <Menu className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2 border-[1.5px] rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {navbarOpen ? (
        <div className="flex flex-col py-20 items-center h-screen md:hidden">
          {NavItems.map((item: NavItem) => (
            <Link
              key={item.page}
              href={item.page}
              className={"pb-2 hover:text-[#FF1493]"}
              onClick={() => setNavbarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
