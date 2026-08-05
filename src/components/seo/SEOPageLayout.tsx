import Link from 'next/link';
import { ReactNode } from 'react';

interface SEOPageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  badge?: string;
}

export default function SEOPageLayout({ children, title, subtitle, breadcrumb, badge }: SEOPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8931F] flex items-center justify-center">
              <span className="font-black text-sm text-[#0F172A]">MK</span>
            </div>
            <span className="font-bold text-white group-hover:text-[#D4AF37] transition-colors text-sm">
              Mandeep Kaith
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#contact" className="px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-sm hover:bg-[#D4AF37]/10 transition-colors">
              Contact
            </Link>
            <Link href="/properties" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0A0A0A] text-sm font-bold hover:opacity-90 transition-opacity">
              Properties
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative pt-16 pb-16 bg-gradient-to-b from-[#0F172A] to-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-inter">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">{breadcrumb || title}</span>
          </div>
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-inter mb-6">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
              {badge}
            </div>
          )}
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-inter text-lg text-neutral-400 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {/* Divider */}
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8931F] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-seo">
          {children}
        </div>
      </main>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1a1a2e] to-[#0F172A] border-y border-[#D4AF37]/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3">Get In Touch</p>
          <h2 className="font-poppins text-3xl sm:text-4xl font-black text-white mb-4">
            Connect with <span className="text-[#D4AF37]">Mandeep Kaith</span>
          </h2>
          <p className="font-inter text-neutral-400 mb-8 max-w-xl mx-auto">
            Ready to find your perfect property? Mandeep Kaith and the KAITH PROPERTIES team are here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8931F] text-[#0A0A0A] font-poppins font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Contact Mandeep Kaith
            </Link>
            <Link href="/properties" className="px-8 py-4 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-inter text-sm hover:bg-[#D4AF37]/10 transition-colors">
              View Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8931F] flex items-center justify-center">
              <span className="font-black text-xs text-[#0A0A0A]">MK</span>
            </div>
            <span className="font-inter text-sm text-neutral-400">Mandeep Kaith — KAITH PROPERTIES</span>
          </div>
          <div className="flex gap-4 text-xs text-neutral-600">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-[#D4AF37] transition-colors">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
