'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  // Mock data placeholders (1 s/d 6)
  const testimonials = [1, 2, 3, 4];

  // State untuk menyimpan index gambar yang sedang dibuka (null = tertutup)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => setSelectedIndex(null);

  // Fungsi navigasi Next/Prev
  const showNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === null ? null : (prev + 1) % testimonials.length
      );
    },
    [testimonials.length]
  );

  const showPrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + testimonials.length) % testimonials.length
      );
    },
    [testimonials.length]
  );

  // Handle Keyboard Event (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);

    // Lock body scroll saat lightbox terbuka
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section
      id='testimonials'
      className='py-20 bg-white overflow-hidden'>
      <div className='container-custom mb-10 text-center'>
        <h2 className='text-3xl font-bold text-slate-900'>Bukti Testimoni</h2>
        <p className='text-slate-600 mt-2'>
          Klik gambar untuk melihat bukti transaksi yang berjaya
        </p>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-20 scrollbar-hide'>
        {testimonials.map((id, index) => (
          <div
            key={id}
            className='group relative snap-center shrink-0 w-[300px] md:w-[350px] aspect-[3/5] rounded-2xl overflow-hidden shadow-lg border border-slate-100 cursor-pointer bg-slate-100'
            onClick={() => setSelectedIndex(index)}>
            {/* Overlay Icon on Hover */}
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center'>
              <ZoomIn
                className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md'
                size={32}
              />
            </div>

            <Image
              src={`/images/testimoni/${id}.jpeg`}
              alt={`Testimoni Pelanggan ${id}`}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
              sizes='(max-width: 768px) 80vw, 25vw'
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'
            onClick={closeLightbox} // Klik background untuk tutup
          >
            {/* Tombol Close */}
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50'
              aria-label='Tutup'>
              <X size={32} />
            </button>

            {/* Tombol Prev */}
            <button
              onClick={showPrev}
              className='absolute left-4 md:left-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-50 hidden sm:block'
              aria-label='Sebelumnya'>
              <ChevronLeft size={40} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='relative w-full max-w-4xl h-[80vh]'
              onClick={(e) => e.stopPropagation()} // Mencegah klik pada gambar menutup lightbox
            >
              <Image
                src={`/images/testimoni/${testimonials[selectedIndex]}.jpeg`}
                alt='Testimoni Fullscreen'
                fill
                className='object-contain'
                priority
                sizes='100vw'
              />

              {/* Counter Indicator */}
              <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-sm backdrop-blur-md'>
                {selectedIndex + 1} / {testimonials.length}
              </div>
            </motion.div>

            {/* Tombol Next */}
            <button
              onClick={showNext}
              className='absolute right-4 md:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all z-50 hidden sm:block'
              aria-label='Selanjutnya'>
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
