import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex justify-between py-6">
      <div>
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>GA</AvatarFallback>
          </Avatar>
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
