import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
    
    const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false)
        const routes = [
          { id: 1, path: "/", name: "Home" },
          { id: 2, path: "/about", name: "About" },
          { id: 3, path: "/services", name: "Services" },
          { id: 4, path: "/contact", name: "Contact" },
        ];

        return (
          <div className="bg-purple-500">
            <nav  className=" z-20 h-12 md:container md:p-0 ps-4 pr-4 md:ps-0 md:pr-0 mx-auto relative  pt-2 pb-2 ">
              <div
                className=" relative cursor-pointer md:hidden z-30 "
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span>
                  {isOpen ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                  )}
                </span>
              </div> 
                <ul
                  className={`md:flex gap-3 duration-500 bg-purple-500 text-white p-4 absolute md:static   ${
                    isOpen ? "top-12 z-10" : "-top-96 h-0 -z-10"
                  }`}
                >
                  {routes.map((route) => (
                    <Link key={route.id} route={route} />
                  ))}
                </ul>             
            </nav>
          </div>
        );
    };
    
    export default Navbar;