import Image from 'next/image';

import styles from './login.module.css';

export default function Login() {
  return (
    <div className="bg-primary flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 py-4 w-[400px]">
        <Image src="/carrito.svg" width={119} height={97} alt="" />

        <div className={styles.ejemplo}>
          este es un texto rojo
        </div>
        <form className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 border border-solid border-white rounded-lg p-2">
            <Image src="/user.svg" width={24} height={24} alt="" />
            <input
              type="text"
              placeholder="Usuario"
              className="text-white bg-transparent placeholder:text-white focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-2 border border-solid border-white rounded-lg p-2">
            <Image src="/password.svg" width={24} height={24} alt="" />

            <input
              type="password"
              placeholder="Contraseña"
              className="text-white bg-transparent placeholder:text-white focus:outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-white text-primary rounded-lg shadow-lg"
          >
            Ingresar
          </button>
          <div className="flex justify-end items-center">
            <a href="#" className="text-white">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
