import { Shield, FileText, Users, Home } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { useTranslations } from '@/lib/use-translations';

const benefitIcons = [Shield, FileText, Users, Home];

interface BenefitsProps {
  locale: Locale;
}

export default function Benefits({ locale }: BenefitsProps) {
  const t = useTranslations(locale);

  const benefits = [
    t.benefits.trustSeal,
    t.benefits.contentMarketing,
    t.benefits.qualifiedInvestors,
    t.benefits.propertyVerifications
  ];

  return (
    <section id="benefits" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">{t.benefits.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{benefit}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
