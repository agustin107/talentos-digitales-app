'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cookies from 'nookies';

export function RegisterForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get form values
    const form = e.currentTarget;
    const formData = new FormData(form);
    const usuario = formData.get('usuario') as string;
    const password = formData.get('password') as string;

    cookies.set(null, 'usuario', usuario, {
      maxAge: 30 * 24 * 60 * 60,
    });

    cookies.set(null, 'password', password, {
      maxAge: 30 * 24 * 60 * 60,
    });

    router.push('/login');
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
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
        Registrar
      </button>
    </form>
  );
}
