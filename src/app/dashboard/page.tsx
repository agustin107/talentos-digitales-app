'use client';

import { useRouter } from 'next/navigation';
import cookies from 'nookies';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      Dashboard
      <button
        onClick={() => {
          cookies.destroy(null, 'isLogged');
          router.push('/login');
        }}
      >
        Cerrar sesion
      </button>
    </div>
  );
}
