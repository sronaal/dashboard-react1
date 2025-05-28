import {
    RiMailFill,
    RiLockFill,
    RiEyeFill,
    RiEyeOffFill,
  } from "react-icons/ri";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  function ForgetPassword() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="bg-[#1E1F25] p-8 rounded-xl  shadow-2xl">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] mb-8">
          Recuperar <span className="text-[#C600EB] border-b py-2">Contraseña</span>
        </h1>
        <form className="">

  
          <div className="relative mb-4">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-400" />
            <input
              type="email"
              className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg text-gray-200  focus:border-[#C600EB] focus:ring-2 focus:ring-[#C600EB]"
              placeholder="Correo electronico"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#C600EB] w-full py-3 px-4 rounded-lg text-gray-100 uppercase text-sm font-bold hover:text-black hover:rounded-full transition-colors duration-700 cursor-pointer mb-3"
            >
              Enviar instrucciones
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-4 items-center  text-gray-100">
        <span className="flex items-center gap-2">
            ¿Ya tienes cuenta?
            <Link to="/auth/" className="text-[#C600EB] hover:text-gray-200 transition-colors duration-300">
              Ingresa
            </Link>
          </span>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?
            <Link to="/auth/register" className="text-[#C600EB] hover:text-gray-200 transition-colors duration-300">
              Registrate
            </Link>
          </span>
        </div>
      </div>
    );
  }
  
  export default ForgetPassword;
  