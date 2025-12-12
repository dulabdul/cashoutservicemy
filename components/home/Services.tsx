import { SERVICES, WA_LINK } from '@/data/content';
import Button from '@/components/ui/Button';
import { ShoppingBag, Zap, Car } from 'lucide-react';

// Helper map untuk icon dinamis
const iconMap = {
  ShoppingBag: ShoppingBag,
  Zap: Zap,
  Car: Car,
};

export default function Services() {
  return (
    <section
      id='services'
      className='py-20 bg-slate-50'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>
            Layanan Kami
          </h2>
          <p className='text-slate-600'>
            Solusi pencairan untuk pelbagai platform
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {SERVICES.map((service, idx) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] || ShoppingBag;
            return (
              <div
                key={idx}
                className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center'>
                <div className='w-16 h-16 bg-rose-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6'>
                  <Icon size={32} />
                </div>
                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-slate-600 mb-8 flex-grow'>{service.desc}</p>
                <Button
                  href={WA_LINK}
                  variant='outline'
                  external
                  fullWidth>
                  Tukar Sekarang
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
