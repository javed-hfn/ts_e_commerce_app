import React from "react";
import Link from "next/link";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="shadow p-3  flex items-center justify-between">
      <Link className="text-sky-600 font-bold flex" href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house mt-1 mx-1"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
        Home
      </Link>
      <Link className="ml-auto mr-4" href={"/cartPage"}>
        <CartButton />
      </Link>
    </header>
  );
};

export default Header;
