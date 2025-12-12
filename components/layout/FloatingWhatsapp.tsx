import { WA_LINK } from '@/data/content';
import { Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300'
      aria-label='Chat via WhatsApp'>
      <Phone size={28} />
    </a>
  );
}
