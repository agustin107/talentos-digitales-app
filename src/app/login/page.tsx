import Image from 'next/image';

import { LoginForm } from './LoginForm';

export default function LoginPage() {
  return (
    <div className="bg-primary flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 py-4 w-[400px]">
        <Image src="/carrito.svg" width={119} height={97} alt="" />

        <LoginForm />
      </div>
    </div>
  );
}
