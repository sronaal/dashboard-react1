import { RiMailFill,RiLockFill, RiEyeFill } from 'react-icons/ri'
import { useState } from 'react'

function Login() {


  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className="bg-[#1E1F25] p-8 rounded-xl text-white shadow-2xl">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] mb-8">Iniciar Sesión</h1>
      <form className="">

        <button className="flex items-center gap-4 bg-[#131517] w-full justify-center py-2 px-4 rounded-3xl mb-8 cursor-pointer">
          <img className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"/>
          Ingresa con Google
        </button>

        <div className='relative mb-4'>
          <RiMailFill  className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-400'  />
          <input 
            type="email" 
            className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg"  
            placeholder="Correo electronico"/>
        </div>

        <div className='relative'>
          <RiLockFill  className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-400'  />
          <input 
            type={showPassword ? "text" : "password"} 
            className="py-3 pl-8 pr-4  bg-[#131517] w-full outline-none rounded-lg"  
            placeholder="Contraseña"/>
         <RiEyeFill onClick={ () => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-400'/>
        </div>
       
      </form>
    </div>
  );
}

export default Login;
