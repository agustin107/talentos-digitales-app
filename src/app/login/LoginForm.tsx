'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cookies, { parseCookies } from 'nookies';
import { useState } from 'react';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get form values
    const form = e.currentTarget;
    const formData = new FormData(form);
    const usuario = formData.get('usuario') as string;
    const password = formData.get('password') as string;
    const parsedCookies = parseCookies();
    const usuarioGuardado = parsedCookies['usuario'] as string;
    const passwordGuardado = parsedCookies['password'] as string;

    console.log({ usuario, password, usuarioGuardado, passwordGuardado });

    if (usuario === usuarioGuardado && password === passwordGuardado) {
      cookies.set(null, 'isLogged', 'true', {
        maxAge: 30 * 24 * 60 * 60,
      });

      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-400 text-white p-3 mb-2">
          Algo anduvo mal, intente nuevamente.
        </div>
      )}
      <div className="flex gap-2 border border-solid border-white rounded-lg p-2">
        <Image src="/user.svg" width={24} height={24} alt="" />
        <input
          name="usuario"
          type="text"
          placeholder="Usuario"
          className="text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        />
      </div>
      <div className="flex gap-2 border border-solid border-white rounded-lg p-2">
        <Image src="/password.svg" width={24} height={24} alt="" />

        <input
          name="password"
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
  );
}
