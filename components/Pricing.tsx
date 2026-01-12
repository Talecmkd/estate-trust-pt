import { Check } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { useTranslations } from '@/lib/use-translations';

interface PricingProps {
  locale: Locale;
}

export default function Pricing({ locale }: PricingProps) {
  const t = useTranslations(locale);

  const plans = [
    {
      badge: t.pricing.plans.individual.badge,
      badgeColor: 'bg-green-50 text-brand-dark',
      name: t.pricing.plans.individual.name,
      description: t.pricing.plans.individual.description,
      price: t.pricing.plans.individual.price,
      period: t.pricing.plans.individual.period,
      setup: t.pricing.plans.individual.setup,
      features: t.pricing.plans.individual.features,
      featured: false
    },
    {
      badge: t.pricing.plans.boutique.badge,
      badgeColor: 'bg-white/10 text-white',
      name: t.pricing.plans.boutique.name,
      description: t.pricing.plans.boutique.description,
      price: t.pricing.plans.boutique.price,
      period: t.pricing.plans.boutique.period,
      setup: t.pricing.plans.boutique.setup,
      features: t.pricing.plans.boutique.features,
      featured: true,
      highlight: t.pricing.plans.boutique.highlight
    },
    {
      badge: t.pricing.plans.enterprise.badge,
      badgeColor: 'bg-blue-50 text-blue-800',
      name: t.pricing.plans.enterprise.name,
      description: t.pricing.plans.enterprise.description,
      price: t.pricing.plans.enterprise.price,
      period: t.pricing.plans.enterprise.period,
      setup: t.pricing.plans.enterprise.setup,
      features: t.pricing.plans.enterprise.features,
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">{t.pricing.title}</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-brand-navy shadow-2xl transform scale-105'
                  : 'bg-white border border-slate-200'
              } hover:shadow-xl transition-all`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-brand text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                  {plan.highlight}
                </div>
              )}

              <div className="mb-4">
                <span className={`${plan.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                  {plan.badge}
                </span>
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-brand-navy'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className={`text-3xl font-bold ${plan.featured ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.price}
                  </span>
                  <span className={`font-medium ml-1 ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <div className={`text-sm mt-1 ${plan.featured ? 'text-slate-400' : 'text-slate-400'}`}>
                  {plan.setup}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-brand-light' : 'text-brand'}`} />
                    <span className={`text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">{t.pricing.needMore}</p>
          <a
            href="#footer"
            className="inline-block px-8 py-3 border-2 border-brand text-brand font-bold rounded-lg hover:bg-green-50 transition"
          >
            {t.pricing.contactSales}
          </a>
        </div>
      </div>
    </section>
  );
}
