import { ADVANTAGES } from '@/data/content';
import { ShieldCheck } from 'lucide-react';

export default function Advantages() {
  return (
    <section
      id='advantages'
      className='py-20 bg-slate-900 text-white'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Keunggulan Kami</h2>
          <p className='text-slate-400'>Kenapa pelanggan memilih kami?</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className='flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700'>
              <ShieldCheck
                className='text-[var(--color-primary)] shrink-0'
                size={24}
              />
              <span className='font-semibold'>{adv}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
