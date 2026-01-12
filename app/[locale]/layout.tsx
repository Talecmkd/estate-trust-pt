import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Locale, locales } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "EstateTrust | Real Estate Verification & Certification",
    pt: "EstateTrust | Verificação e Certificação Imobiliária",
  };

  const descriptions = {
    en: "The global standard for trust and transparency in the real estate industry. Verify licenses, reputation, and identity.",
    pt: "O padrão global de confiança e transparência na indústria imobiliária. Verifique licenças, reputação e identidade.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
