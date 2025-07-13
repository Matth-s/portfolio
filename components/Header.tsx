import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-16 border-b-2 bg-[#141726]">
      <nav className="mx-auto my-auto lg:mx-0">
        <ul className="flex gap-x-8 px-8 font-bold">
          <li>
            <Link href={"/"}>Accueil</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
