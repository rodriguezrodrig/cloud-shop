import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomLogo } from '@/components/custom/CustomLogo';

import { useAuthStore } from '@/auth/store/auth.store';

export const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const { changePassword } = useAuthStore();

  const [isPosting, setIsPosting] = useState(false);

  const handleChangePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPosting(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const newPassword = formData.get('newPassword') as string;

    const isValid = await changePassword( newPassword);

    if (isValid) {
      toast.info('Contraseña actualizada');
      navigate('/');
      return;
    }

    toast.error('Contraseña no valida');
    setIsPosting(false);
  };

  return (
    <div className={'flex flex-col gap-6'}>
      <Card className="overflow-hidden p-0  ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleChangePassword}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <CustomLogo />

                <p className="text-balance text-muted-foreground">
                  Cambie su contraseña
                </p>
              </div>              
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    ¿Problemas con tu nueva contraseña?
                  </a>
                </div>
                <Input
                  id="newPassword"
                  type="text"
                  name="newPassword"
                  required
                  placeholder="Nueva Contraseña"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPosting}>
                Cambiar contraseña
              </Button>
                          
             
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
      
    </div>
  );
};
