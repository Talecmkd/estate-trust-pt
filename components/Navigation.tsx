'use client';

import { Menu, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, locales, localeNames } from '@/lib/i18n';
import { useTranslations } from '@/lib/use-translations';
import { useState } from 'react';

interface NavigationProps {
  locale: Locale;
  onShowHome: () => void;
  onGetVerified: () => void;
}

export default function Navigation({ locale, onShowHome, onGetVerified }: NavigationProps) {
  const t = useTranslations(locale);
  const pathname = usePathname();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const getLocalizedPath = (newLocale: Locale) => {
    // Remove current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

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
              <a href="#benefits" onClick={onShowHome} className="hover:text-brand transition">
                {t.navigation.benefits}
              </a>
              <a href="#how-it-works" onClick={onShowHome} className="hover:text-brand transition">
                {t.navigation.howWeVerify}
              </a>
              <a href="#professionals" onClick={onShowHome} className="hover:text-brand transition">
                {t.navigation.findPros}
              </a>
              <a href="#pricing" onClick={onShowHome} className="hover:text-brand transition">
                {t.navigation.pricing}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="px-3 py-2 text-slate-600 hover:text-brand transition flex items-center gap-2"
                aria-label="Change language"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">
                  {locale.toUpperCase()}
                </span>
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocalizedPath(loc)}
                      onClick={() => setShowLanguageMenu(false)}
                      className={`block px-4 py-2 text-sm hover:bg-slate-50 transition ${
                        loc === locale ? 'text-brand font-semibold' : 'text-slate-700'
                      }`}
                    >
                      {localeNames[loc]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={onGetVerified}
              className="px-5 py-2.5 bg-brand-navy text-white rounded-lg font-semibold hover:bg-brand transition"
            >
              {t.navigation.getVerified}
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
