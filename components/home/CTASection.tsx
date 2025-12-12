import { CTA_EXTRA, WA_LINK } from '@/data/content';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className='py-24 bg-rose-50 border-t border-rose-100'>
      <div className='container-custom text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-slate-900 mb-8'>
          {CTA_EXTRA.headline}
        </h2>
        <Button
          href={WA_LINK}
          external
          size='lg'
          className='px-10 py-4 text-lg shadow-xl shadow-rose-200'>
          {CTA_EXTRA.button}
        </Button>
      </div>
    </section>
  );
}
