import { RegisterForm } from './RegisterForm';

export default function RegisterPage() {
  return (
    <div className="bg-primary flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 py-4 w-[400px]">
        <RegisterForm />
      </div>
    </div>
  );
}
