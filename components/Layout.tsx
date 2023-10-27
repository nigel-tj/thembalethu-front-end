import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { IoIosSearch, IoIosLogIn } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex items-center justify-between p-6 max-w-full h-8 bg-[#0171CE]">
        <div className="flex items-center">
          <Link href="">
            <Image
              src={""}
              alt="logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>

          <div className="flex ml-16 space-x-4 rounded-full">
            <h1 className="w-full p-2 mr-2 bg-white">address</h1>
          </div>
        </div>
        <div className="flex items-center">
          <Link className="flex items-center space-x-2 text-white" href={""}>
            <span>Meu Perfil</span>
            <IoIosLogIn size={20} />
          </Link>

          <Link
            className="flex items-center space-x-2 text-white"
            href={"/LoginScreenUser"}
          >
            <span>Conecte-se</span>
            <IoIosLogIn size={20} />
          </Link>
        </div>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
