'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { HERO_CONTENT, WA_LINK } from '@/data/content';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative pt-32 pb-20 overflow-hidden bg-rose-50/50'>
      <div className='container-custom grid md:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='z-10'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6'>
            {HERO_CONTENT.headline}
          </h1>
          <p className='text-lg text-slate-600 mb-8 max-w-lg leading-relaxed'>
            {HERO_CONTENT.subheadline}
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              href={WA_LINK}
              external
              withIcon
              size='lg'>
              {HERO_CONTENT.cta}
            </Button>
            <Button
              href='#services'
              variant='secondary'>
              Lihat Layanan
            </Button>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl'>
          {/* PLACEHOLDER: Ganti src dengan /images/hero.jpg */}
          <Image
            src='/images/hero.png'
            alt='Happy customer using cashout service'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </motion.div>
      </div>
    </section>
  );
}
