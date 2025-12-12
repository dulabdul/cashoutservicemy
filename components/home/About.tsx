import { ABOUT_CONTENT, WHY_CHOOSE_US } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>
            {ABOUT_CONTENT.title}
          </h2>
          <p className='text-slate-600 text-lg leading-relaxed'>
            {ABOUT_CONTENT.text}
          </p>
        </div>

        {/* Why Choose Us */}
        <div className='grid md:grid-cols-3 gap-8'>
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className='bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow'>
              <div className='w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6'>
                <CheckCircle2 size={24} />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>
                {item.title}
              </h3>
              <p className='text-slate-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
