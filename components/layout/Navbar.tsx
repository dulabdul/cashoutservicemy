'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, DollarSign } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, WA_LINK } from '@/data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Testimoni', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}>
      <div className='container-custom flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 font-bold text-2xl text-slate-900'>
          <div className='bg-[var(--color-primary)] p-1.5 rounded-lg text-white'>
            <DollarSign size={24} />
          </div>
          <span>
            Cashout<span className='text-[var(--color-primary)]'>Service</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors'>
              {link.name}
            </Link>
          ))}
          <Button
            href={WA_LINK}
            external
            variant='primary'
            className='py-2 px-5 text-sm'>
            Kontak Kami
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden p-2 text-slate-700'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-lg font-medium text-slate-800 py-2 border-b border-slate-50'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button
            href={WA_LINK}
            external
            fullWidth>
            Kontak WhatsApp
          </Button>
        </div>
      )}
    </nav>
  );
}
