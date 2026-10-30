'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrackingBox } from '@/components/TrackingBox';
import { ShipmentResult } from '@/components/ShipmentResult';
import { SearchMode, ShipmentData } from '@/lib/types';
import {
  lookupShipments,
  RECORD_1_ON_TIME,
  RECORD_2_CRITICAL_DELAY,
} from '@/lib/sampleData';
import {
  ShieldAlert,
  HelpCircle,
  TrendingUp,
  FileText,
  Clock,
  ArrowRight,
  Layers,
  Radio,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

function TrackingPortalContent() {
  const [searchMode, setSearchMode] = useState<SearchMode>('waybill');
  const [inputValue, setInputValue] = useState<string>('21092924823');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shipments, setShipments] = useState<ShipmentData[]>([RECORD_1_ON_TIME]);
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  // Read URL query params safely on client mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const awbParam = params.get('awb') || params.get('q');
      if (awbParam) {
        setInputValue(awbParam);
        const results = lookupShipments(awbParam);
        setShipments(results);
        setActiveTabIdx(0);
        setHasSearched(true);
      }
    }
  }, []);

  const handleTrack = () => {
    setIsLoading(true);
    // 1.5 second realistic loading spinner requirement
    setTimeout(() => {
      const results = lookupShipments(inputValue);
      setShipments(results);
      setActiveTabIdx(0);
      setIsLoading(false);
      setHasSearched(true);

      // Smooth scroll to results
      const resultsElement = document.getElementById('shipment-results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const activeShipment = shipments[activeTabIdx] || shipments[0];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <main className="flex-1 pb-16">
        {/* Hero Section with Enterprise Banner */}
        <div className="relative bg-gradient-to-b from-[#00205B] via-[#002875] to-slate-100 pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 border-b border-slate-200">
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse"></span>
              <span>Apex Telematics Engine • Multi-Carrier Synchronized</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Express Cargo & Waybill Telematics
            </h1>

            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
              Real-time multi-modal tracking for Domestic Surface Express, Containerized Ocean Freight, and Customs Clearance across Gateway Ports & National Sorting Hubs.
            </p>
          </div>

          {/* High-Impact Tracking Box Centered */}
          <div className="relative z-20">
            <TrackingBox
              searchMode={searchMode}
              setSearchMode={setSearchMode}
              inputValue={inputValue}
              setInputValue={setInputValue}
              isLoading={isLoading}
              onTrack={handleTrack}
              onClear={handleClear}
            />
          </div>
        </div>

        {/* Results Container Section */}
        <section
          id="shipment-results-section"
          className="max-w-5xl mx-auto px-4 -mt-10 sm:-mt-14 relative z-30 space-y-6"
        >
          {/* Multiple Waybills Tab Navigation Bar (If more than 1 searched) */}
          {shipments.length > 1 && (
            <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase px-3 py-1">
                Tracked Waybills ({shipments.length}):
              </span>
              {shipments.map((item, idx) => {
                const isActive = activeTabIdx === idx;
                const isCrit = item.statusType === 'critical';
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTabIdx(idx)}
                    className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition shadow-sm ${
                      isActive
                        ? 'bg-[#00205B] text-white ring-2 ring-[#FFCC00]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{item.queryId}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-sans font-bold uppercase ${
                        isCrit
                          ? 'bg-red-500 text-white'
                          : item.statusType === 'success'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-blue-600 text-white'
                      }`}
                    >
                      {item.statusType === 'critical' ? 'DELAY' : item.currentStatus.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Result Card (Strictly containing #shipment-status, #current-location, #revised-eta, #milestone-timeline) */}
          {hasSearched && activeShipment && (
            <ShipmentResult
              key={activeShipment.queryId}
              shipment={activeShipment}
              isSingle={shipments.length === 1}
            />
          )}

          {/* Quick Help & Customs Advisory Card */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 text-[#00205B] rounded-lg">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 uppercase">
                  Customs Examination & CFS
                </h5>
                <p className="text-slate-500 mt-0.5">
                  Containers held under customs yard check require bill of entry verification before release.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-amber-50 text-amber-700 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 uppercase">
                  Demurrage Avoidance
                </h5>
                <p className="text-slate-500 mt-0.5">
                  Free-period detention expires after 72 hours of vessel discharge at GTI Nhava Sheva.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 uppercase">
                  Dock Proof of Delivery (e-POD)
                </h5>
                <p className="text-slate-500 mt-0.5">
                  Delivered consignments generate signed digital manifests downloadable from Enterprise Login.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 border-4 border-[#00205B] border-t-[#FFCC00] rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-bold text-slate-700">Loading APEX Telematics Engine...</p>
          </div>
        </div>
      }
    >
      <TrackingPortalContent />
    </Suspense>
  );
}
