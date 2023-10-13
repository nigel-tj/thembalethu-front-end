import { useEffect, useState } from "react";
import { IoIosSearch, IoIosLogIn } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";



const NavBar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [address, setAddress] = useState<string | null>(null);

 

 

  return (
    <nav className="flex items-center justify-between p-6 max-w-full h-8 bg-[#0171CE]">
      
      <div className="flex items-center">
        <Link href="/HomeScreen">
          <Image
            src={""}
            alt="logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>

        <div className="flex ml-16 space-x-4 rounded-full">
          <h1 className="w-full p-2 mr-2 bg-white">{address}</h1>

        </div>
      </div>
      <div className="flex items-center">
       
          <Link
            className="flex items-center space-x-2 text-white"
            href={"/UserDashboard"}
          >
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
  );
};

export default NavBar;