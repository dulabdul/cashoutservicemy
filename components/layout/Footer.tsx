import Link from 'next/link';
import { SITE_CONFIG } from '@/data/content';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className='bg-slate-900 text-slate-300 py-12'
      id='contact'>
      <div className='container-custom'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-bold text-white mb-4'>
              {SITE_CONFIG.name}
            </h3>
            <p className='text-sm opacity-80 max-w-xs'>
              {SITE_CONFIG.description}
            </p>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Pautan Pantas</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='#about'
                  className='hover:text-white'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='hover:text-white'>
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href='#testimonials'
                  className='hover:text-white'>
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Hubungi Kami</h4>
            <div className='flex flex-col gap-3 text-sm'>
              <a
                href={`https://wa.me/${SITE_CONFIG.waNumber}`}
                className='flex items-center gap-2 hover:text-white'>
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-slate-800 pt-8 text-center text-xs opacity-60'>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
