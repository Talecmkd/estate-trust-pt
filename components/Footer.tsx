import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { useTranslations } from '@/lib/use-translations';

interface FooterProps {
  locale: Locale;
  onLinkClick: () => void;
}

export default function Footer({ locale, onLinkClick }: FooterProps) {
  const t = useTranslations(locale);

  return (
    <footer id="footer" className="bg-brand-navy text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="EstateTrust Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-xl tracking-tight">
                Estate<span className="text-brand">Trust</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand transition">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.company.title}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" onClick={onLinkClick} className="hover:text-brand transition">{t.footer.company.aboutUs}</a></li>
              <li><a href="#" onClick={onLinkClick} className="hover:text-brand transition">{t.footer.company.howItWorks}</a></li>
              <li><a href="#" onClick={onLinkClick} className="hover:text-brand transition">{t.footer.company.pricing}</a></li>
              <li><a href="#" onClick={onLinkClick} className="hover:text-brand transition">{t.footer.company.blog}</a></li>
              <li><a href="#" onClick={onLinkClick} className="hover:text-brand transition">{t.footer.company.careers}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.resources.title}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand transition">{t.footer.resources.helpCenter}</a></li>
              <li><a href="#" className="hover:text-brand transition">{t.footer.resources.verificationGuide}</a></li>
              <li><a href="#" className="hover:text-brand transition">{t.footer.resources.apiDocumentation}</a></li>
              <li><a href="#" className="hover:text-brand transition">{t.footer.resources.trustSafety}</a></li>
              <li><a href="#" className="hover:text-brand transition">{t.footer.resources.compliance}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.contact.title}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:kelloggfairbank@gmail.com" className="hover:text-brand transition">
                  kelloggfairbank@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/31615448100" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition">
                  +31 6 15448100
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t.footer.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {t.footer.legal.copyright}
          </div>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-brand transition">
              {t.footer.legal.privacyPolicy}
            </Link>
            <Link href={`/${locale}/terms-of-service`} className="hover:text-brand transition">
              {t.footer.legal.termsOfService}
            </Link>
            <Link href={`/${locale}/cookie-policy`} className="hover:text-brand transition">
              {t.footer.legal.cookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
