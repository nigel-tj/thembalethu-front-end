import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          {/* Other links remain the same */}
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="#"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="text-center text-white dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by Maindo
        </div>
      </div>
    </footer>
  );
};

export default Footer;
