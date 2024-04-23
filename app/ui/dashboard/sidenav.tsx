import React from "react";
import Link from "next/link";
import NavLinks from "./navlinks";
import Image from "next/image";
const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2" data-testid="main-container">
    <Link
      className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
      href="/"
      data-testid="logo-link"
     
    >
      <Image
        src="/pokemon.svg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/pokemon.svg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </Link>
    <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <NavLinks />
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" data-testid="hidden-background-div"></div>
    </div>
  </div>
  
  );
};

export default SideNav;
