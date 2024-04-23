
import React from "react";
import Link from "next/link";

const WelcomeButton = () => {
  return (
    <Link
      href="/dashboard"
      className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
    >
      Dashboard
    </Link>
  );
};

export default WelcomeButton;
