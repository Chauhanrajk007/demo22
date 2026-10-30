'use client';

import React from 'react';
import {
  PhoneCall,
  Globe2,
  ShieldCheck,
  Radio,
  Lock,
  ChevronDown,
  Truck,
  Box,
  Anchor,
  Layers,
} from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#00205B] text-white shadow-lg sticky top-0 z-50">
      {/* Top Hotline & Telematics Status Ribbon */}
      <div className="bg-[#001740] border-b border-blue-900/60 text-xs px-4 py-1.5 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Hotline */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-amber-300 font-semibold">
              <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-[#FFCC00]" />
              <span>24/7 Priority Freight Support: 1800-200-APEX</span>
            </div>
            <span className="text-blue-400 hidden sm:inline">|</span>
            <div className="hidden md:flex items-center text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              <span>EDI Telematics Gateway: <strong className="text-white">ONLINE</strong></span>
            </div>
            <div className="hidden lg:flex items-center text-slate-300">
              <span className="text-slate-400">ICEGATE Customs:</span>
              <span className="ml-1 text-emerald-300">SYNCED (v2.8)</span>
            </div>
          </div>

          {/* Quick links & language */}
          <div className="flex items-center space-x-4 text-slate-300">
            <div className="hidden sm:flex items-center space-x-1 cursor-pointer hover:text-white transition">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFCC00]" />
              <span>AEO-T3 Tier Certified</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition">
              <Globe2 className="w-3.5 h-3.5" />
              <span>EN (India / Global)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Enterprise Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#D40511] to-[#99000b] rounded-lg shadow-md border border-red-400/30">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFCC00] rounded-full border-2 border-[#00205B]"></div>
            <Truck className="w-6 h-6 text-white stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans uppercase">
                APEX<span className="text-[#FFCC00]">.</span>EXPRESS
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 bg-red-600/90 text-white rounded tracking-wider uppercase">
                CARGO
              </span>
            </div>
            <div className="text-[11px] sm:text-xs tracking-wider text-blue-200 uppercase font-semibold flex items-center gap-1.5">
              <span>GLOBAL TRACKER & TELEMATICS PORTAL</span>
            </div>
          </div>
        </div>

        {/* Enterprise Nav Tabs */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold">
          <button className="px-3 py-2 rounded-md bg-blue-900/60 text-[#FFCC00] border-b-2 border-[#FFCC00] flex items-center space-x-1">
            <Radio className="w-4 h-4 mr-1 text-[#FFCC00]" />
            <span>Tracking</span>
          </button>
          <button className="px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-900/40 transition flex items-center">
            <span>Services</span>
            <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70" />
          </button>
          <button className="px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-900/40 transition">
            <span>Network</span>
          </button>
          <button className="px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-900/40 transition">
            <span>Customs & CFS</span>
          </button>
          <button className="px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-900/40 transition">
            <span>Schedules</span>
          </button>
        </nav>

        {/* Enterprise Login Button */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1.5 bg-[#D40511] hover:bg-[#b0040e] text-white px-3.5 py-2 rounded font-bold text-xs sm:text-sm tracking-wide transition shadow-sm border border-red-500/40">
            <Lock className="w-3.5 h-3.5" />
            <span>Enterprise Login</span>
          </button>
        </div>
      </div>

      {/* Characteristic Blue Dart / DHL dual color accent stripes */}
      <div className="h-1.5 w-full flex">
        <div className="h-full bg-[#FFCC00] w-1/3"></div>
        <div className="h-full bg-[#D40511] w-2/3"></div>
      </div>
    </header>
  );
};
