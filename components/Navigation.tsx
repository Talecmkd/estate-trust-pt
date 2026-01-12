import { Menu } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  onShowHome: () => void;
  onGetVerified: () => void;
}

export default function Navigation({ onShowHome, onGetVerified }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={onShowHome} className="flex items-center gap-3 group">
              <Image
                src="/logo.svg"
                alt="EstateTrust Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-2xl tracking-tight text-brand-navy">
                Estate<span className="text-brand">Trust</span>
              </span>
            </button>
            <div className="hidden md:flex ml-10 space-x-8 text-sm font-medium text-slate-600">
              <a href="#benefits" onClick={onShowHome} className="hover:text-brand transition">Benefits</a>
              <a href="#how-it-works" onClick={onShowHome} className="hover:text-brand transition">How We Verify</a>
              <a href="#professionals" onClick={onShowHome} className="hover:text-brand transition">Find Pros</a>
              <a href="#pricing" onClick={onShowHome} className="hover:text-brand transition">Pricing</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onGetVerified}
              className="px-5 py-2.5 bg-brand-navy text-white rounded-lg font-semibold hover:bg-brand transition"
            >
              Get Verified
            </button>
            <button className="md:hidden text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
