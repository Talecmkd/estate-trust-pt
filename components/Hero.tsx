'use client';

import { CheckCircle, Star, Building, Lock, Home, Key, MapPin, Landmark, Briefcase, LucideIcon } from 'lucide-react';

const getCompanyIcon = (name: string, type: string): LucideIcon => {
  const nameLower = name.toLowerCase();
  const typeLower = type.toLowerCase();
  
  if (nameLower.includes('luxury') || typeLower.includes('luxury')) return Home;
  if (nameLower.includes('prime') || typeLower.includes('property management')) return Key;
  if (nameLower.includes('urban') || typeLower.includes('commercial')) return Building;
  if (nameLower.includes('coastal') || nameLower.includes('beach')) return MapPin;
  if (nameLower.includes('metro') || nameLower.includes('residential')) return Home;
  if (nameLower.includes('heritage') || nameLower.includes('historic')) return Landmark;
  if (typeLower.includes('management')) return Briefcase;
  if (typeLower.includes('commercial')) return Building;
  
  return Building;
};

const PartnerCard = ({ name, type }: { name: string; type: string }) => {
  const Icon = getCompanyIcon(name, type);
  const colors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-purple-100 text-purple-600',
    'bg-orange-100 text-orange-600',
    'bg-pink-100 text-pink-600',
    'bg-teal-100 text-teal-600',
  ];
  const colorIndex = name.length % colors.length;
  const colorClass = colors[colorIndex];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-80 flex-shrink-0">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-brand-navy text-sm">{name}</h3>
          <div className="text-xs text-slate-500">{type}</div>
        </div>
      </div>
      <div className="flex text-yellow-400 text-xs mb-1 gap-0.5">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
      </div>
      <p className="text-slate-600 text-xs line-clamp-2">&quot;The verification seal gave us instant credibility with clients.&quot;</p>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="hero-pattern pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-brand-dark text-sm font-medium mb-6">
          <CheckCircle className="w-4 h-4" /> Over 5,000 Agents Verified in 2025
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy tracking-tight mb-6">
          Trust is the Currency of <br className="hidden md:block" /> <span className="text-brand">Real Estate</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
          We verify licenses, reputation, and identity so you don&apos;t have to.
          For professionals, it&apos;s a badge of honor. For clients, it&apos;s peace of mind.
        </p>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Verified Today
            </button>
          </div>
        </div>

        <div className="mb-16 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Static trust markers */}
           <div className="text-slate-400 font-bold text-xl flex items-center gap-2">
             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
             </svg>
             Reviews
           </div>
           <div className="text-slate-400 font-bold text-xl flex items-center gap-2">
             <CheckCircle className="w-5 h-5" /> NAR Member
           </div>
           <div className="text-slate-400 font-bold text-xl flex items-center gap-2">
             <Lock className="w-5 h-5" /> Secured
           </div>
        </div>

        {/* Marquee */}
        <div className="w-full max-w-7xl mx-auto py-4 overflow-hidden relative mask-edges">
          <div className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused]">
            <PartnerCard name="Lisbon Luxury" type="Real Estate Agency" />
            <PartnerCard name="Prime Estates" type="Property Management" />
            <PartnerCard name="Urban Key" type="Commercial RE" />
            <PartnerCard name="Coastal Properties" type="Luxury Real Estate" />
            <PartnerCard name="Metro Realty" type="Residential Sales" />
            <PartnerCard name="Heritage Homes" type="Historic Properties" />
            <PartnerCard name="Lisbon Luxury" type="Real Estate Agency" />
            <PartnerCard name="Prime Estates" type="Property Management" />
            <PartnerCard name="Urban Key" type="Commercial RE" />
            <PartnerCard name="Coastal Properties" type="Luxury Real Estate" />
            <PartnerCard name="Metro Realty" type="Residential Sales" />
            <PartnerCard name="Heritage Homes" type="Historic Properties" />
          </div>
        </div>
      </div>
    </section>
  );
}
