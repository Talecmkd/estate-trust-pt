'use client';

import { Star, CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { normalizeText } from '@/lib/utils';
import { useState } from 'react';

interface Professional {
  name: string;
  role: string;
  initials: string;
  rating: number;
}

const professionals: Professional[] = [
  {
    name: 'António Moreira',
    role: 'Senior Broker',
    initials: 'AM',
    rating: 5
  },
  {
    name: 'Sofia Costa',
    role: 'Luxury Agent',
    initials: 'SC',
    rating: 4.5
  },
  {
    name: 'Miguel Fernandes',
    role: 'Property Manager',
    initials: 'MF',
    rating: 4
  },
  {
    name: 'Carolina Rodrigues',
    role: 'Realtor',
    initials: 'CR',
    rating: 5
  }
];

const ProfessionalAvatar = ({ name, initials }: { name: string; initials: string }) => {
  const [imageError, setImageError] = useState(false);
  const normalizedName = normalizeText(name);
  const imagePath = `/professionals/${normalizedName}.png`;

  return (
    <div className="relative mb-4">
      <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
        {!imageError ? (
          <Image
            src={imagePath}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-2xl font-bold text-slate-600">
            {initials}
          </span>
        )}
      </div>
      {/* Verification Badge */}
      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#34D399] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
        <CheckCircle className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= Math.floor(rating);
        const isHalf = star === Math.ceil(rating) && rating % 1 !== 0;
        
        if (isFilled) {
          return (
            <Star
              key={star}
              className="w-4 h-4 text-yellow-400 fill-current"
            />
          );
        } else if (isHalf) {
          return (
            <div key={star} className="relative w-4 h-4">
              <Star className="absolute inset-0 w-4 h-4 text-slate-300 fill-none" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
          );
        } else {
          return (
            <Star
              key={star}
              className="w-4 h-4 text-slate-300 fill-none"
            />
          );
        }
      })}
    </div>
  );
};

export default function ListedProfessionals() {
  return (
    <section id="professionals" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Listed Professionals
          </h2>
          <p className="text-lg text-slate-500">
            Connect with verified individual agents and brokers.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {/* Avatar with Verification Badge */}
              <ProfessionalAvatar 
                name={professional.name}
                initials={professional.initials}
              />

              {/* Name */}
              <h3 className="text-lg font-bold text-brand-navy mb-1">
                {professional.name}
              </h3>

              {/* Role */}
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">
                {professional.role}
              </p>

              {/* Star Rating */}
              <div className="mb-4">
                <StarRating rating={professional.rating} />
              </div>

              {/* View Profile Button */}
              <button className="w-full px-4 py-2 border-2 border-brand-light text-brand-light bg-white rounded-lg font-medium hover:bg-brand-light hover:text-white transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* Browse All Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-brand-navy font-medium hover:text-brand transition-colors"
          >
            Browse all 2,340 verified professionals
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
