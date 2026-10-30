'use client';

import React, { useState } from 'react';
import {
  ShipmentData,
  Milestone,
} from '@/lib/types';
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  MapPin,
  Truck,
  Anchor,
  Box,
  Printer,
  Share2,
  Copy,
  Building2,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Flame,
  FileSpreadsheet,
} from 'lucide-react';

interface ShipmentResultProps {
  shipment: ShipmentData;
  isSingle?: boolean;
}

export const ShipmentResult: React.FC<ShipmentResultProps> = ({
  shipment,
  isSingle = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(
        `${window.location.origin}?awb=${shipment.queryId}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const isCritical = shipment.statusType === 'critical';
  const isDelivered = shipment.statusType === 'success';

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8 transition-all">
      {/* Top Waybill Header Card */}
      <div className="bg-[#00205B] text-white p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#FFCC00]">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-900 text-blue-200 uppercase tracking-wider">
              {shipment.mode.includes('Ocean') ? 'EXIM Ocean Freight' : 'Surface Linehaul Express'}
            </span>
            {shipment.referenceNumber && (
              <span className="text-xs text-slate-300 font-mono">
                REF: <strong className="text-white">{shipment.referenceNumber}</strong>
              </span>
            )}
          </div>
          <div className="flex items-baseline space-x-3">
            <h3 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
              {shipment.queryId}
            </h3>
            <span className="text-xs text-slate-300 hidden sm:inline">
              (Master Consignment Note)
            </span>
          </div>
        </div>

        {/* Action icons (Print, Copy Link) */}
        <div className="flex items-center space-x-2 no-print">
          <button
            onClick={handleCopyLink}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded bg-blue-900/80 hover:bg-blue-800 text-slate-200 hover:text-white transition border border-blue-700"
            title="Copy Direct Telematics URL"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded bg-blue-900/80 hover:bg-blue-800 text-slate-200 hover:text-white transition border border-blue-700"
            title="Print Cargo Manifest Summary"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Manifest</span>
          </button>
        </div>
      </div>

      {/* Financial Demurrage Warning Alert (Mandatory for Record 2) */}
      {shipment.demurrageWarning && (
        <div className="bg-red-50 border-l-8 border-[#D40511] p-4 sm:p-5 m-4 sm:m-6 rounded-r-lg shadow-sm">
          <div className="flex items-start space-x-3.5">
            <div className="p-2 bg-red-100 rounded-full flex-shrink-0 animate-pulse">
              <ShieldAlert className="w-6 h-6 text-[#D40511]" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-black text-red-900 tracking-wide uppercase flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#D40511]" />
                  EXIM Demurrage & Detention Hazard Notice
                </h4>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-600 text-white uppercase animate-pulse">
                  LINE STOPPAGE CRITICAL
                </span>
              </div>
              <p
                id="demurrage-alert-text"
                data-testid="demurrage-alert-text"
                className="text-xs sm:text-sm font-bold text-red-800 leading-relaxed font-sans"
              >
                {shipment.demurrageWarning}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-red-700">
                <span className="bg-red-100/80 px-2 py-1 rounded">
                  Accrual Rate: <strong>{shipment.demurrageRate}</strong>
                </span>
                <span className="bg-red-100/80 px-2 py-1 rounded">
                  Impact: <strong>{shipment.lineImpact}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Primary Telematics KPI Cards */}
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-200 bg-slate-50/70">
        {/* Status Element Card */}
        <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-blue-900" />
            <span>Consignment Status</span>
          </div>
          <div className="mt-1">
            <span
              id="shipment-status"
              data-testid="shipment-status"
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs sm:text-sm font-black tracking-wide uppercase shadow-sm ${
                isCritical
                  ? 'bg-red-600 text-white animate-pulse-alert border border-red-700'
                  : isDelivered
                  ? 'bg-emerald-600 text-white border border-emerald-700'
                  : 'bg-blue-600 text-white border border-blue-700'
              }`}
            >
              {isCritical ? (
                <AlertTriangle className="w-4 h-4 mr-1.5 flex-shrink-0" />
              ) : isDelivered ? (
                <CheckCircle2 className="w-4 h-4 mr-1.5 flex-shrink-0" />
              ) : (
                <Truck className="w-4 h-4 mr-1.5 flex-shrink-0" />
              )}
              {shipment.currentStatus}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Last Telematics Handshake: Just now (Automated Port Feeder)
          </div>
        </div>

        {/* Current Location Element Card */}
        <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D40511]" />
            <span>Current Physical Location</span>
          </div>
          <div className="mt-1">
            <span
              id="current-location"
              data-testid="current-location"
              className="text-sm sm:text-base font-bold text-slate-900 block leading-snug"
            >
              {shipment.currentLocation}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Facility Telematics: Geo-fenced Area Validated
          </div>
        </div>

        {/* Updated / Revised ETA Element Card */}
        <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Updated Delivery ETA</span>
          </div>
          <div className="mt-1">
            <span
              id="revised-eta"
              data-testid="revised-eta"
              className={`text-sm sm:text-base font-black block leading-snug ${
                isCritical ? 'text-[#D40511]' : 'text-slate-900'
              }`}
            >
              {shipment.revisedEta || shipment.expectedDelivery}
            </span>
            {shipment.originalPromisedEta && (
              <div className="text-xs text-slate-500 mt-0.5 line-through">
                Original ETA: {shipment.originalPromisedEta}
              </div>
            )}
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            {isCritical ? (
              <span className="text-red-600 font-semibold">
                Critical SLA Breach: +{shipment.delayHours} Hours Variance
              </span>
            ) : (
              <span>Predicted ETA precision: ±15 mins</span>
            )}
          </div>
        </div>
      </div>

      {/* Visual Carrier Milestone Stepper Bar */}
      <div className="p-4 sm:p-6 border-b border-slate-200 bg-white">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          Supply Chain Progression Stepper
        </h4>
        <div className="grid grid-cols-5 gap-2 sm:gap-4 relative text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                shipment.progressStep >= 1
                  ? 'bg-[#00205B] text-white ring-2 ring-blue-300'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              1
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-700">
              Pickup & Manifest
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              Origin Facility
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                shipment.progressStep >= 2
                  ? 'bg-[#00205B] text-white ring-2 ring-blue-300'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              2
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-700">
              Linehaul Transit
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              En Route Highway/Sea
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                isCritical
                  ? 'bg-[#D40511] text-white ring-4 ring-red-200 animate-pulse'
                  : shipment.progressStep >= 3
                  ? 'bg-[#00205B] text-white ring-2 ring-blue-300'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              3
            </div>
            <span
              className={`text-[11px] sm:text-xs font-bold ${
                isCritical ? 'text-red-700' : 'text-slate-700'
              }`}
            >
              Terminal / Yard
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              {isCritical ? 'Customs Hold' : 'Sort Hub Inbound'}
            </span>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                shipment.progressStep >= 4
                  ? 'bg-[#00205B] text-white ring-2 ring-blue-300'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              4
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-700">
              Out for Delivery
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              Delivery Van Staged
            </span>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1.5 ${
                shipment.progressStep >= 5
                  ? 'bg-emerald-600 text-white ring-4 ring-emerald-200'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              5
            </div>
            <span
              className={`text-[11px] sm:text-xs font-bold ${
                shipment.progressStep >= 5 ? 'text-emerald-700' : 'text-slate-700'
              }`}
            >
              Consignee Dock
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              Dock Handover
            </span>
          </div>
        </div>
      </div>

      {/* Cargo & Demographics Metadata Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50/50 border-b border-slate-200 text-xs">
        <div className="space-y-1">
          <span className="text-slate-400 font-semibold uppercase">Commodity / Item Details</span>
          <p className="font-bold text-slate-900 font-sans text-sm">{shipment.commodity}</p>
          <span className="text-slate-500 block font-mono">{shipment.weightOrPieces}</span>
        </div>

        <div className="space-y-1">
          <span className="text-slate-400 font-semibold uppercase">Shipper & Origin Consignment</span>
          <p className="font-bold text-slate-900 font-sans text-sm">{shipment.shipper}</p>
          <span className="text-slate-500 block font-mono">Consignor Code: APX-UK-089</span>
        </div>

        <div className="space-y-1">
          <span className="text-slate-400 font-semibold uppercase">Destination & Unloading Dock</span>
          <p className="font-bold text-slate-900 font-sans text-sm">{shipment.destination}</p>
          <span className="text-slate-500 block font-mono">Dedicated Hub Gate Pass Active</span>
        </div>

        <div className="space-y-1">
          <span className="text-slate-400 font-semibold uppercase">Transit Mode & Assigned Unit</span>
          <p className="font-bold text-slate-900 font-sans text-sm">{shipment.mode}</p>
          <span className="text-slate-500 block font-mono">{shipment.vesselOrVehicle}</span>
        </div>
      </div>

      {/* Milestone History Table (MANDATORY ID: milestone-timeline) */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00205B]" />
              Milestone Audit Trail & Detailed Telematics
            </h4>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Chronological Order (Latest First)
          </span>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table
            id="milestone-timeline"
            data-testid="milestone-timeline"
            className="w-full text-left text-xs sm:text-sm border-collapse"
          >
            <thead>
              <tr className="bg-[#00205B] text-white text-xs uppercase font-bold tracking-wider">
                <th className="py-3 px-4 border-b border-blue-900 w-1/4 sm:w-1/5">
                  Timestamp (IST)
                </th>
                <th className="py-3 px-4 border-b border-blue-900 w-1/4">
                  Checkpoint / Terminal Location
                </th>
                <th className="py-3 px-4 border-b border-blue-900">
                  Milestone Activity & Telematics Log
                </th>
                <th className="py-3 px-4 border-b border-blue-900 w-28 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {shipment.milestones.map((milestone, idx) => {
                const isFirst = idx === 0;
                return (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      isFirst && isCritical
                        ? 'bg-red-50/50'
                        : isFirst && isDelivered
                        ? 'bg-emerald-50/40'
                        : ''
                    }`}
                  >
                    {/* Timestamp */}
                    <td className="py-3 px-4 font-mono font-bold text-slate-800 whitespace-nowrap align-top">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{milestone.timestamp}</span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3 px-4 font-semibold text-slate-700 align-top">
                      <div className="flex items-start space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{milestone.location}</span>
                      </div>
                    </td>

                    {/* Milestone Activity */}
                    <td className="py-3 px-4 align-top">
                      <p className="font-bold text-slate-900">{milestone.activity}</p>
                      {milestone.equipmentInfo && (
                        <p className="text-xs text-slate-500 font-mono mt-0.5">
                          Telematics / Unit: {milestone.equipmentInfo}
                        </p>
                      )}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3 px-4 text-center align-top">
                      <span
                        className={`inline-block px-2.5 py-1 rounded text-[11px] font-bold tracking-wide uppercase ${
                          milestone.status === 'COMPLETED'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : milestone.status === 'EXCEPTION' || milestone.status === 'ALERT'
                            ? 'bg-rose-100 text-rose-800 border border-rose-300 font-black'
                            : 'bg-blue-100 text-blue-800 border border-blue-300'
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
