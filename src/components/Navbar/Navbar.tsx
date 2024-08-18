import { auth, currentUser } from "@clerk/nextjs/server";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = async () => {
  const { userId } = auth();

  return (
    <div
      className={`inset-x-0 top-0 z-[200] mx-auto flex max-w-[85rem] items-center justify-between rounded-2xl px-4 py-5 antialiased md:w-full md:px-10 bg-transparent `}
    >
      <div className="relative">
        <Link className="relative z-10" href="/">
          <h1 className="text-2xl font-bold">Clerk Auth</h1>
        </Link>
      </div>
      <div className="h-full items-center space-x-4 flex lg:space-x-8">
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative z-10 flex max-w-max flex-1 items-center justify-center"
        >
          <div style={{ position: "relative" }}>
            {userId ? (
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-1"
                dir="ltr"
              >
                <li>
                  <Link className="ml-4 block" href="/sign-in">
                    <span className="__className_b3f6a0 relative z-20 block cursor-pointer rounded-xl bg-black px-8 py-3 text-center text-sm text-white dark:bg-white dark:text-black font-semibold shadow-2xl">
                      Sign in
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="ml-4 block" href="/sign-up">
                    <span className="__className_b3f6a0 relative z-20 block cursor-pointer rounded-xl bg-black px-8 py-3 text-center text-sm text-white dark:bg-white dark:text-black font-semibold shadow-2xl hidden sm:block">
                      Sign up
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="absolute left-0 top-full flex justify-center"></div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
