import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine
} from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'

export const Register = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#1E1F25] p-8 rounded-xl  shadow-2xl">
    <h1 className="text-3xl uppercase font-bold tracking-[5px] mb-8">
      Crear <span className="text-[#C600EB] border-b py-2">Cuenta</span>
    </h1>
    <form className="">
      <button className="flex items-center gap-4 bg-[#131517] w-full justify-center py-2 px-4 rounded-3xl mb-8 cursor-pointer text-gray-100">
        <img
          className="w-5 h-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
        />
        Registrarse con Google
      </button>

      <div className="relative mb-4">
        <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-[#C600EB]" />
        <input
          type="text"
          className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg text-gray-200  focus:border-[#C600EB] focus:ring-2 focus:ring-[#C600EB]"
          placeholder="Nombre(s)"
        />
      </div>

      <div className="relative mb-4">
        <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-[#C600EB]" />
        <input
          type="text"
          className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg text-gray-200  focus:border-[#C600EB] focus:ring-2 focus:ring-[#C600EB]"
          placeholder="Apellido(s)"
        />
      </div>


      <div className="relative mb-4">
        <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-[#C600EB]" />
        <input
          type="email"
          className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg text-gray-200  focus:border-[#C600EB] focus:ring-2 focus:ring-[#C600EB]"
          placeholder="Correo electronico"
        />
      </div>
      <div className="relative mb-4">
        <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-[#C600EB]" />
        <input
          type={showPassword ? "text" : "password"}
          className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg text-gray-200 focus:border-[#C600EB] focus:ring-2 focus:ring-[#C600EB]" 
          placeholder="Contraseña"
        />
        {showPassword ? (
          <RiEyeOffLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-[#C600EB]"
          />
        ) : (
          <RiEyeLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-[#C600EB]"
          />
        )}

        <RiEyeLine
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-400"
        />
      </div>

      <div className="relative mb-4">
        <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-[#C600EB]" />
        <input
          type={showPassword ? "text" : "password"}
          className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg text-gray-200 focus:border-[#C600EB] focus:ring-2 focus:ring-[#C600EB]" 
          placeholder="Confirmar Contraseña"
        />
        {showPassword ? (
          <RiEyeOffLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-[#C600EB]"
          />
        ) : (
          <RiEyeLine
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-[#C600EB]"
          />
        )}

        <RiEyeLine
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-400"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#C600EB] w-full py-3 px-4 rounded-lg text-gray-100 uppercase text-sm font-bold hover:text-black hover:rounded-full transition-colors duration-700 cursor-pointer mb-3"
        >
          Registrarme
        </button>
      </div>
    </form>
    <div className="flex flex-col gap-4 items-center  text-gray-100">
      <Link to="/" className="hover:text-[#C600EB] transition-color duration-300" >
        ¿Olvidaste tu contraseña?
      </Link>
      <span className="flex items-center gap-2">
        ¿Ya tienes cuenta?
        <Link to="/auth/" className="text-[#C600EB] hover:text-gray-200 transition-colors duration-300">
          Ingresa
        </Link>
      </span>
    </div>
  </div>
  )
}
