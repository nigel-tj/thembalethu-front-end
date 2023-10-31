import React from 'react';
import Image from 'next/image';
import { FaReddit, FaFacebook, FaGithub } from 'react-icons/fa';

const Team = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          At Thembalethu Solutions, we offer a comprehensive suite of electrical services for residential, commercial, and industrial clients. Our team of skilled professionals provides high-quality workmanship, adheres to industry standards, and delivers reliable and sustainable solutions.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <div className="relative w-32 h-32 rounded-full ring-4 ring-gray-300">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Arthur Melo"
                  layout="fill"
                />
              </div>

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Arthur Melo</h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Design Director</p>

              <div className="flex mt-3 -mx-2">
                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                  <FaReddit size={24} />
                </a>

                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>

                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            {/* Repeat the above structure for other team members */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
