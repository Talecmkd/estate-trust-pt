import { Shield, FileText, Users, Home } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Trust Seal'
  },
  {
    icon: FileText,
    title: 'Content Marketing + Image Branding'
  },
  {
    icon: Users,
    title: 'Highly Qualified Investors & Buyers'
  },
  {
    icon: Home,
    title: 'Property Verifications'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">What You Gain with EstateTrust</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{benefit.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
