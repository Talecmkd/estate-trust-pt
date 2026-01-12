import { Lock } from 'lucide-react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { useTranslations } from '@/lib/use-translations';

interface HowWeVerifyProps {
  locale: Locale;
}

export default function HowWeVerify({ locale }: HowWeVerifyProps) {
  const t = useTranslations(locale);

  const steps = [
    {
      title: t.howWeVerify.steps.identity.title,
      description: t.howWeVerify.steps.identity.description
    },
    {
      title: t.howWeVerify.steps.reputation.title,
      description: t.howWeVerify.steps.reputation.description
    },
    {
      title: t.howWeVerify.steps.address.title,
      description: t.howWeVerify.steps.address.description
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - How We Verify */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
              {t.howWeVerify.title}
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Numbered Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Browser Mockup */}
          <div>
            <div className="mb-4">
              <p className="text-brand-light uppercase text-sm font-medium tracking-wide">
                {t.howWeVerify.liveIntegration}
              </p>
            </div>

            {/* Browser Window */}
            <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
              {/* Browser Controls and Address Bar */}
              <div className="bg-slate-700 px-4 py-3 flex items-center gap-3">
                {/* Traffic Light Buttons */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Address Bar */}
                <div className="flex-1 bg-slate-600 rounded-md px-4 py-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand-light" />
                  <span className="text-white text-sm">https://www.realestate-lisbon.com/</span>
                </div>
              </div>

              {/* Browser Content - Live Website Embed */}
              <div className="bg-white p-6 min-h-[500px] relative overflow-hidden">
                <iframe
                  src="https://www.realestate-lisbon.com/"
                  className="w-full h-[450px] border-0 rounded-lg"
                  title="Real Estate Lisbon - Live Website"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />

                {/* Verified Partner Badge Overlay */}
                <div className="absolute bottom-6 right-6 bg-white border border-slate-200 rounded-md px-2 py-1.5 shadow-lg z-10">
                  <div className="flex flex-col items-center gap-0.5">
                    <Image
                      src="/logo.svg"
                      alt="EstateTrust Logo"
                      width={16}
                      height={16}
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <span className="text-xs font-semibold text-slate-800 leading-tight">
                      EstateTrust
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wide leading-tight">
                      {t.howWeVerify.verifiedBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text below browser */}
            <p className="mt-4 text-center text-slate-300 text-sm">
              {t.howWeVerify.integrationNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
