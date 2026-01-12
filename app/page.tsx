'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowWeVerify from '@/components/HowWeVerify';
import DataIntegrity from '@/components/DataIntegrity';
import ListedProfessionals from '@/components/ListedProfessionals';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  const handleShowHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation
        onShowHome={handleShowHome}
        onGetVerified={() => {
          setTimeout(() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowWeVerify />
        <DataIntegrity />
        <ListedProfessionals />
        <Pricing />

        {/* CTA Section */}
        <section className="py-20 bg-brand text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you a Real Estate Professional?
            </h2>
            <p className="text-xl text-green-50 mb-8">
            Join thousands of verified agents. Gain a high-quality backlink, build instant trust, and stand out in a crowded market.                </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-green-50 transition"
              >
                Get Verified Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Learn about Business Plans
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onLinkClick={handleShowHome} />
    </>
  );
}
