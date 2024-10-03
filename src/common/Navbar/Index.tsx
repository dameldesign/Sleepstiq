import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/types/data';
import { useTheme } from 'next-themes';
import { Moon, Sun, MenuIcon } from 'lucide-react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  /**
  |--------------------------------------------------
  | Theme 
  |--------------------------------------------------
  */

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="">
      <header className="container mx-auto px-4 pb-6 pt-12 md:pl-32 flex justify-between items-center">
        <div className=" [@media(max-width:1000px)]:basis-[60%]">
          <img
            src={theme === 'dark' ? '/images/Brand-white.svg' : '/images/Brand.svg'}
            alt="Sleep Petiq Logo"
            className="h-16 flex items-start justify-start"
          />
        </div>
        <nav className="hidden md:flex space-x-14 basis-[55%]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-primary text-lg ${
                location.pathname === item.href ? 'font-bold' : ''
              } hover:font-bold hover:text-gray-900`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Theme */}

        <div className=" flex flex-col items-center justify-center bg-background text-foreground">
          <Button onClick={toggleTheme} className="flex items-center gap-2">
            {theme === 'light' ? (
              <>
                <Moon size={16} color="#ffffff" />
              </>
            ) : (
              <>
                <Sun size={16} color="#000000" />
              </>
            )}
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <nav className="flex flex-col  space-y-4 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navbar;
