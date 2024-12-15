"use client";

import Link from "next/link";
import Image from "next/image";

import NavLink from "./NavLink";
// import { useAuth } from "@/context/AuthContext";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  //   const { user, isLoading } = useAuth();

  const user = null;
  const isLoading = false;

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}>
      <nav className="container xl:max-w-screen-xl flex items-center gap-20">
        <Link href="/" className="flex items-center justify-start gap-3">
          <Image src="/logo.png" width={28} height={200} />
          <h1 className="text-xl text-zinc-200 font-bold">بلاگینو</h1>
        </Link>

        <ul className="w-full flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
