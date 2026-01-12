'use client';

import { use } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowWeVerify from '@/components/HowWeVerify';
import DataIntegrity from '@/components/DataIntegrity';
import ListedProfessionals from '@/components/ListedProfessionals';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { Locale } from '@/lib/i18n';
import { useTranslations } from '@/lib/use-translations';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const typedLocale = locale as Locale;
  const t = useTranslations(typedLocale);

  const handleShowHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation
        locale={typedLocale}
        onShowHome={handleShowHome}
        onGetVerified={() => {
          setTimeout(() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      <main className="flex-grow">
        <Hero locale={typedLocale} />
        <Benefits locale={typedLocale} />
        <HowWeVerify locale={typedLocale} />
        <DataIntegrity locale={typedLocale} />
        <ListedProfessionals locale={typedLocale} />
        <Pricing locale={typedLocale} />

        {/* CTA Section */}
        <section className="py-20 bg-brand text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.ctaSection.title}
            </h2>
            <p className="text-xl text-green-50 mb-8">
              {t.ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-green-50 transition"
              >
                {t.ctaSection.getVerified}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                {t.ctaSection.learnMore}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={typedLocale} onLinkClick={handleShowHome} />
    </>
  );
}
