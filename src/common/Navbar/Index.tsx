import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/types/data';
import { MenuIcon } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    return (
        <div className="min-h-screen">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img src="/placeholder.svg?height=40&width=120" alt="Sleep Petiq Logo" className="h-10" />
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </nav>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
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