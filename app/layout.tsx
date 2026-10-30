import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'APEX EXPRESS LOGISTICS | Global Telematics & Cargo Tracker',
  description:
    'Enterprise-grade multi-modal shipment tracking portal. Real-time telematics gateway integration for domestic surface express, EXIM ocean container freight, and air cargo.',
  keywords: [
    'logistics tracking',
    'waybill search',
    'container tracking',
    'freight telematics',
    'port terminal status',
    'apex express',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-apex-yellow selection:text-apex-blue">
        {children}
      </body>
    </html>
  );
}
