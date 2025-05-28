import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage2Line,
  RiCalendarTodoLine,
  RiLogoutCircleLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine
} from "react-icons/ri";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);


  return (
    <>
      <div className={`xl:h-[100vh] overflow-y-scroll scroll-hidden  fixed xl:static w-[80%] xl:w-full md:w-[40%] h-full  top-0 bg-[#1E1F25] p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"} transition-all duration-300`}>
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin <span className="text-[#C600EB] text-4xl">.</span>{" "}
          </h1>
          <ul>
            <li>
              <Link className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors">
                <RiBarChart2Line className="text-[#C600EB] w-5 h-5" />
                Analitica
              </Link>
            </li>

            <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg text-sm hover:bg-[#131517] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-[#C600EB] w-5 h-5" /> Redes
                  Sociales
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubMenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={`my-2 ${
                  showSubMenu ? "h-full" : "h-0"
                }  overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                before:bg-[#C600EB] before:rounded-full before:-left-[7px] before:top-1/2 before:-translate-y-1/2 before:border-2 before-[#131517] 
                hover:text-white transition-colors"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                before:bg-gray-500 before:rounded-full before:-left-[7px] before:top-1/2 before:-translate-y-1/2 before:border-2 before-[#131517]
                hover:text-white transition-colors"
                    to=""
                  >
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                before:bg-gray-500 before:rounded-full before:-left-[7px] before:top-1/2 before:-translate-y-1/2 before:border-2 before-[#131517]
                hover:text-white transition-colors"
                    to=""
                  >
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="flex items-center gap-4 py-2 px-4 rounded-lg text-sm hover:bg-[#131517] transition-colors">
                <RiMessage2Line className="text-[#C600EB] w-5 h-5" />
                Mensajes
              </Link>
            </li>

            <li>
              <Link className="flex items-center gap-4 py-2 px-4 rounded-lg text-sm hover:bg-[#131517] transition-colors">
                <RiCalendarTodoLine className="text-[#C600EB] w-5 h-5" />
                Calendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors">
            <RiLogoutCircleLine className="text-[#C600EB] w-5 h-5" />
            Cerrar sesión
          </Link>
        </nav>
      </div>

      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden fixed bottom-4 right-4 bg-[#C600EB] text-black p-3 rounded-full z-50">
        
        { showMenu ? <RiCloseLine />  : <RiMenu3Line/> }
        
      </button>
    </>
  );
}

export default Sidebar;
