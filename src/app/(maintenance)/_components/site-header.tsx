'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, Menu, X, Home, Star, HelpCircle, FileText, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

interface NavLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const NavLink = ({ href, label, icon, isActive = false }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
        isActive ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {label}
    </Link>
  );
};


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 pt-4">
      <motion.div
        className="mx-auto max-w-7xl"
        layout
        transition={{ duration: 0.3 }}
      >
        {/* Main navbar container that will expand on mobile */}
        <motion.nav 
          className={`w-full overflow-hidden bg-accent lg:bg-background rounded-2xl ${
            isScrolled ? 'mt-2 bg-accent lg:border' : ''
          } ${isOpen ? 'rounded-b-none md:rounded-2xl' : 'rounded-2xl'}`}
          layout
          transition={{ duration: 0.3 }}
        >
          {/* Top navbar section with logo and actions */}
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <Link2 className="text-primary" />
              <span className="font-medium text-lg">iShortn</span>
            </Link>
            
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center space-x-8">
               <NavLink href="/features" label="Features" icon={<Star size={16} />} />
               <NavLink href="/faq" label="FAQ" icon={<HelpCircle size={16} />} />
                <NavLink href="/docs" label="Docs" icon={<FileText size={16} />} />
                <NavLink href="/changelog" label="Changelog" icon={<Activity size={16} />} />
            </div>

            {/* Actions: Theme toggle and auth buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="rounded-full px-4">
                Log in
              </Button>
              <Button size="sm" className="rounded-full px-4">
                Sign up
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center space-x-3 md:hidden">
              <ThemeToggle />
              <button 
                onClick={toggleMenu} 
                className="inline-flex items-center justify-center p-2 text-muted-foreground hover:text-foreground rounded-md bg-accent/50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu - Part of the same container */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="md:hidden border-t border-border/50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 py-4 flex flex-col space-y-4">
                  <NavLink href="/" label="Home" icon={<Home size={16} />} isActive />
                  <NavLink href="/features" label="Features" icon={<Star size={16} />} />
                  <NavLink href="/faq" label="FAQ" icon={<HelpCircle size={16} />} />
                  <NavLink href="/docs" label="Docs" icon={<FileText size={16} />} />
                  <NavLink href="/changelog" label="Changelog" icon={<Activity size={16} />} />
                  
                  <div className="flex flex-row space-x-3 pt-3 border-t border-border/50">
                    <Button  size="sm" className="justify-start rounded-full">
                      Log in
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start rounded-full">
                      Sign up
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Bottom curved edge when mobile menu is open */}
        {isOpen && (
          <motion.div 
            className="mx-auto max-w-7xl bg-accent h-4 rounded-b-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </header>
  );
}