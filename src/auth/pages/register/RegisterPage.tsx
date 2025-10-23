import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomLogo } from '@/components/custom/CustomLogo';
import { Link, useNavigate } from 'react-router';
import { useAuthStore } from '@/auth/store/auth.store';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export const RegisterPage = () => {

  const navigate = useNavigate();
  const { register } = useAuthStore();

  const [isPosting, setIsPosting] = useState(false);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPosting(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;

    const isValid = await register(email, password, fullName);

    if (isValid) {
      navigate('/');
      return;
    }

    toast.error('Correo o/y contraseña y/o nombre no validos');
    setIsPosting(false);
  };

  return (
    <div className={'flex flex-col gap-6'}>
      <Card className="overflow-hidden p-0  ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleRegister}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <CustomLogo />

                <p className="text-balance text-muted-foreground">
                  Crea una nueva cuenta
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fullName">Nombre completo</Label>
                <Input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Nombre completo"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="mail@google.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Contraseña"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPosting}>
                Crear cuenta
              </Button>                            
             
              <div className="text-center text-sm">
                ¿Ya tienes cuenta?{' '}
                <Link to="/auth/login" className="underline underline-offset-4">
                  Ingresa ahora
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/src/assets/placeholder.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Haciendo click, estás de acuerdo con{' '}
        <a href="#">términos y condiciones</a> y{' '}
        <a href="#">políticas de uso</a>.
      </div>
    </div>
  );
};
