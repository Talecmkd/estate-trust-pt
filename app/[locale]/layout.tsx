import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Locale, locales } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  const titles = {
    en: "EstateTrust | Real Estate Verification & Certification",
    pt: "EstateTrust | Verificação e Certificação Imobiliária",
  };

  const descriptions = {
    en: "The global standard for trust and transparency in the real estate industry. Verify licenses, reputation, and identity.",
    pt: "O padrão global de confiança e transparência na indústria imobiliária. Verifique licenças, reputação e identidade.",
  };

  return {
    title: titles[typedLocale] || titles.en,
    description: descriptions[typedLocale] || descriptions.en,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  return (
    <html lang={typedLocale}>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
