import { Check } from 'lucide-react';

const plans = [
  {
    badge: 'Individual',
    badgeColor: 'bg-green-50 text-brand-dark',
    name: 'Individual Professional',
    description: 'Perfect for any real estate professional starting their verification journey.',
    price: '€390',
    period: '/year',
    setup: '+ €149 one-time verification fee',
    features: [
      'Verified profile page with SEO-optimized backlink',
      'Digital verification badge for your website',
      'License & identity verification',
      'Public trust score display',
      'Email support'
    ],
    featured: false
  },
  {
    badge: 'Most Popular',
    badgeColor: 'bg-white/10 text-white',
    name: 'Boutique Team',
    description: 'For small agencies and teams (2-10 agents).',
    price: '€2,400',
    period: '/year',
    setup: '+ €499 one-time verification fee',
    features: [
      'Everything in Individual plan',
      'Up to 10 agent profiles',
      'Agency profile page with team directory',
      'Priority verification (48-hour turnaround)',
      'Dedicated account manager',
      'Priority email & phone support'
    ],
    featured: true,
    highlight: 'Popular Choice'
  },
  {
    badge: 'Enterprise',
    badgeColor: 'bg-blue-50 text-blue-800',
    name: 'Established Firm',
    description: 'For growing brokerages with 11-50 agents.',
    price: '€6,000',
    period: '/year',
    setup: '+ €999 one-time verification fee',
    features: [
      'Everything in Boutique Team plan',
      'Up to 50 agent profiles',
      'Custom branded profile pages',
      'API access for integrations',
      'White-label verification badges',
      'Quarterly compliance reviews',
      'Dedicated success manager'
    ],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Who is EstateTrust For?</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Select the verification plan that matches your business size.
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
          <p className="text-slate-500 mb-4">Need more than 50 agents?</p>
          <a 
            href="#footer" 
            className="inline-block px-8 py-3 border-2 border-brand text-brand font-bold rounded-lg hover:bg-green-50 transition"
          >
            Contact Sales for Enterprise Plans
          </a>
        </div>
      </div>
    </section>
  );
}
