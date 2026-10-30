'use client';

import React from 'react';
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Award,
  Globe,
  Truck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#001740] text-slate-300 border-t-4 border-[#FFCC00]">
      {/* Metrics Banner */}
      <div className="bg-[#00205B] py-8 border-b border-blue-900/80">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FFCC00]">
              99.82%
            </div>
            <div className="text-xs uppercase font-semibold tracking-wider text-blue-200">
              On-Time SLA Delivery
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">
              180+
            </div>
            <div className="text-xs uppercase font-semibold tracking-wider text-blue-200">
              Global Port Terminals Sync
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FFCC00]">
              24 / 7
            </div>
            <div className="text-xs uppercase font-semibold tracking-wider text-blue-200">
              Customs & CFS Liaison Desk
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white">
              500,000+
            </div>
            <div className="text-xs uppercase font-semibold tracking-wider text-blue-200">
              Active Telematics Waybills
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs sm:text-sm">
        {/* Company Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-[#D40511] rounded flex items-center justify-center text-white font-black text-base">
              A
            </div>
            <span className="text-lg font-black text-white tracking-tight uppercase">
              APEX EXPRESS
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Enterprise multi-modal express logistics, port telematics, surface linehaul, and EXIM container tracking. Connecting air, ocean, and domestic surface corridors.
          </p>
          <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-[#FFCC00]">
            <Award className="w-4 h-4 text-[#FFCC00]" />
            <span>ISO 9001:2015 & AEO-T3 Certified Carrier</span>
          </div>
        </div>

        {/* Quick Tracking Services */}
        <div className="space-y-2">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
            Tracking & EDI Services
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="hover:text-white transition cursor-pointer">
              Multi-AWB Batch Query (up to 50 items)
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Ocean Container AIS Transponder Feeds
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Inland Container Depot (ICD) CFS Clearance
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Demurrage & Detention Accrual Monitor
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Automated Webhook & EDIFACT 214 Feeds
            </li>
          </ul>
        </div>

        {/* Enterprise Solutions */}
        <div className="space-y-2">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
            Industrial Corridors
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="hover:text-white transition cursor-pointer">
              Bhiwandi - Peenya Fastline Freight
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Nhava Sheva (JNPT) - Bengaluru ICD Express
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Chennai Port - Hosur Industrial Line
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Delhi NCR Cargo Hub - Pune Express Corridor
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Cold Chain & High-Value Cargo Escort
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div className="space-y-3">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">
            Carrier Support Desk
          </h4>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center space-x-2 text-slate-300">
              <PhoneCall className="w-4 h-4 text-[#FFCC00]" />
              <span className="font-bold text-white">1800-200-APEX (Toll Free)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>telematics-support@apexexpress.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <span>
                Apex National Control Tower, Level 4, Logistics Park, Mumbai 400099
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#000f2e] py-4 border-t border-blue-950 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} APEX Express Logistics Network Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-300 cursor-pointer">Carrier Tariff</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Carriage</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy & Telematics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
