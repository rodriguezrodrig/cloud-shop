import { useRef, type KeyboardEvent } from 'react';
import { Search, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router';
import { cn } from '@/lib/utils';
import { CustomLogo } from '@/components/custom/CustomLogo';

import { useAuthStore } from '@/auth/store/auth.store';
import { toast } from 'sonner';

export const CustomHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { authStatus, isAdmin, logout } = useAuthStore();
  const navigate = useNavigate();

  const { category } = useParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const query = inputRef.current?.value;

    const newSearchParams = new URLSearchParams();

    if (!query) {
      newSearchParams.delete('query');
    } else {
      newSearchParams.set('query', inputRef.current!.value);
    }

    setSearchParams(newSearchParams);
  };

  const handleLogout = () => {
    toast.info('Cerrando sesion')
    navigate('/');
    logout();
    return;   
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <CustomLogo />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                !category ? 'underline underline-offset-4' : ''
              )}
            >
              Todos
            </Link>
            <Link
              to="/productByCategory/crafts"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                category === 'crafts' ? 'underline underline-offset-4' : ''
              )}
            >
              Manualidades
            </Link>
            <Link
              to="/productByCategory/office"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                category === 'office' ? 'underline underline-offset-4' : ''
              )}
            >
              Oficina
            </Link>
            <Link
              to="/productByCategory/school"
              className={cn(
                `text-sm font-medium transition-colors hover:text-primary`,
                category === 'school' ? 'underline underline-offset-4' : ''
              )}
            >
              Escolar
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  placeholder="Buscar productos..."
                  className="pl-9 w-64 h-9 bg-white"
                  onKeyDown={handleSearch}
                  defaultValue={query}
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {authStatus === 'not-authenticated' ? (
              <Link to="/auth/login">
                <Button variant="default" size="sm" className="ml-2">
                  Login
                </Button>
              </Link>
            ) : (
               <>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="ml-2"
              >
                Cerrar sesión
              </Button>
              <Link to="/change-password">
                  <Key  /> 
              </Link>              
              </>
            )}

            {isAdmin() && (
              <Link to="/admin">
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-2"
                  type="button"
                >
                  Admin
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
