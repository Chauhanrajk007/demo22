'use client';

import React from 'react';
import { Search, Loader2, Sparkles, AlertCircle, FileText, CheckCircle2, RotateCcw } from 'lucide-react';
import { SearchMode } from '@/lib/types';

interface TrackingBoxProps {
  searchMode: SearchMode;
  setSearchMode: (mode: SearchMode) => void;
  inputValue: string;
  setInputValue: (val: string) => void;
  isLoading: boolean;
  onTrack: () => void;
  onClear: () => void;
}

export const TrackingBox: React.FC<TrackingBoxProps> = ({
  searchMode,
  setSearchMode,
  inputValue,
  setInputValue,
  isLoading,
  onTrack,
  onClear,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onTrack();
    }
  };

  const setSample = (val: string) => {
    setInputValue(val);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden relative transition-all">
      {/* Top Banner inside the box */}
      <div className="bg-gradient-to-r from-[#00205B] to-[#003399] px-6 py-4 flex flex-wrap items-center justify-between text-white border-b-2 border-[#FFCC00]">
        <div className="flex items-center space-x-2.5">
          <div className="w-3 h-3 rounded-full bg-[#FFCC00] animate-ping"></div>
          <h2 className="text-base sm:text-lg font-bold tracking-wide uppercase">
            Multi-Modal Telematics Tracking
          </h2>
        </div>
        <div className="text-xs text-blue-200 font-medium">
          Real-time GPS • Ocean AIS Feeds • Inland Linehaul
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Toggle Radios */}
        <div className="flex flex-wrap items-center gap-6 pb-2 border-b border-slate-100">
          <label className="inline-flex items-center cursor-pointer group">
            <input
              type="radio"
              name="search_mode"
              value="waybill"
              checked={searchMode === 'waybill'}
              onChange={() => setSearchMode('waybill')}
              className="w-4 h-4 text-[#00205B] focus:ring-[#00205B] border-slate-300 accent-[#00205B] cursor-pointer"
            />
            <span className="ml-2.5 text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#00205B] transition">
              Waybill / AWB No.
            </span>
            <span className="ml-2 text-[10px] bg-blue-100 text-[#00205B] font-bold px-1.5 py-0.5 rounded uppercase">
              Standard
            </span>
          </label>

          <label className="inline-flex items-center cursor-pointer group">
            <input
              type="radio"
              name="search_mode"
              value="reference"
              checked={searchMode === 'reference'}
              onChange={() => setSearchMode('reference')}
              className="w-4 h-4 text-[#00205B] focus:ring-[#00205B] border-slate-300 accent-[#00205B] cursor-pointer"
            />
            <span className="ml-2.5 text-sm sm:text-base font-semibold text-slate-700 group-hover:text-[#00205B] transition">
              Reference No. / Order ID
            </span>
          </label>
        </div>

        {/* Text Area / Input Box */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Query Parameters (Max 5 Waybills):</span>
            <span className="text-slate-400">Separate multiple with comma or space</span>
          </div>

          <div className="relative">
            <textarea
              id="waybill-query-input"
              data-testid="waybill-query-input"
              rows={3}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Enter up to 5 Waybill numbers separated by comma (e.g. 21092924823, MSKU8421095)..."
              className="w-full p-4 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base rounded-lg border-2 border-slate-300 focus:border-[#00205B] focus:ring-2 focus:ring-blue-100 outline-none transition font-mono bg-slate-50/50 resize-none disabled:bg-slate-100 disabled:opacity-75"
            />
            {inputValue && (
              <button
                type="button"
                onClick={onClear}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 p-1 text-xs rounded hover:bg-slate-200 transition"
                title="Clear input"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Action Button & Sample Shortcuts */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Quick Preset Badges */}
          <div className="flex flex-col gap-1.5 text-xs">
            <span className="text-slate-500 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Quick Telematics Test Cases:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSample('21092924823')}
                className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-xs transition"
              >
                <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                21092924823 (On-Time UK Melton)
              </button>

              <button
                type="button"
                onClick={() => setSample('MSKU8421095')}
                className="inline-flex items-center px-2.5 py-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 font-mono text-xs transition"
              >
                <AlertCircle className="w-3 h-3 mr-1 text-rose-600" />
                MSKU8421095 (Demurrage Delay)
              </button>

              <button
                type="button"
                onClick={() => setSample('21092924823, MSKU8421095')}
                className="inline-flex items-center px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-mono text-xs transition"
              >
                Both Consignments (Multi-Track)
              </button>
            </div>
          </div>

          {/* Prominent Track Shipment Action Button */}
          <button
            type="button"
            id="btn-track-shipment"
            data-testid="btn-track-shipment"
            onClick={onTrack}
            disabled={isLoading}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#FFCC00] hover:bg-[#e5b800] active:scale-[0.99] text-[#00205B] font-black text-sm sm:text-base tracking-wider uppercase transition shadow-md hover:shadow-lg border-2 border-yellow-400 group disabled:opacity-75 disabled:cursor-not-allowed min-w-[200px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin text-[#00205B]" />
                <span>CONNECTING...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2 stroke-[2.5] text-[#00205B] group-hover:scale-110 transition-transform" />
                <span>TRACK SHIPMENT</span>
              </>
            )}
          </button>
        </div>

        {/* Loading Spinner Message Section */}
        {isLoading && (
          <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-center space-x-3 animate-pulse">
            <Loader2 className="w-6 h-6 text-[#00205B] animate-spin flex-shrink-0" />
            <div className="text-sm">
              <p className="font-bold text-[#00205B]">
                Querying Global Telematics Gateway & Port Terminals...
              </p>
              <p className="text-xs text-slate-500">
                Contacting Port Terminals, GTI Nhava Sheva CFS, and Surface Route GPS transponders...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
