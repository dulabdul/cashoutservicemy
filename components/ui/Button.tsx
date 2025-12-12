import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg'; // <--- TAMBAHAN: Definisi prop size
  fullWidth?: boolean;
  withIcon?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  className,
  href,
  variant = 'primary',
  size = 'md', // <--- TAMBAHAN: Default size
  fullWidth,
  withIcon,
  external,
  ...props
}: ButtonProps) {
  // Base styles (padding dipindah ke object sizes)
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)] shadow-lg shadow-rose-200',
    secondary:
      'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-200',
    outline:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-rose-50',
  };

  // <--- TAMBAHAN: Definisi style ukuran
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size], // <--- Menggunakan size class
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {children}
      {withIcon && <ArrowRight className='ml-2 h-4 w-4' />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}>
      {content}
    </button>
  );
}
