import { ShipmentData } from './types';

export const RECORD_1_ON_TIME: ShipmentData = {
  queryId: '21092924823',
  referenceNumber: 'PO-UK-BLR-8842',
  mode: 'Domestic Surface Express',
  commodity: 'British Wool Melton Rolls (18 Rolls)',
  shipper: 'Yorkshire Woolens Ltd / UK Consignment',
  destination: 'Peenya Apparel Hub, Bengaluru (Dock A - Cutting Bay)',
  currentStatus: 'DELIVERED / ON SCHEDULE',
  statusType: 'success',
  currentLocation: 'Bengaluru North Distribution Center (Karnataka)',
  expectedDelivery: 'Today at 14:00 IST',
  revisedEta: 'Today at 14:00 IST (Delivered)',
  vesselOrVehicle: 'Van #KA-04-E-4412',
  weightOrPieces: '18 Rolls / 860 Kgs',
  progressStep: 5,
  milestones: [
    {
      timestamp: 'Today 11:30 AM',
      location: 'Bengaluru North Distribution Center',
      activity: 'Out for delivery to Peenya Factory Dock A (Van #KA-04-E-4412)',
      status: 'COMPLETED',
      equipmentInfo: 'Linehaul Van #KA-04-E-4412 (Driver: Rajesh K. / GPS Active)',
    },
    {
      timestamp: 'Today 05:45 AM',
      location: 'Bengaluru Central Sort Hub',
      activity: 'Arrived at Bengaluru Central Sort Hub',
      status: 'COMPLETED',
      equipmentInfo: 'Inbound Linehaul Trailer MH-04-AX-8910',
    },
    {
      timestamp: 'Yesterday 08:30 PM',
      location: 'Bhiwandi National Sorting Facility (Maharashtra)',
      activity: 'Dispatched from Bhiwandi National Sorting Facility (Maharashtra)',
      status: 'COMPLETED',
      equipmentInfo: 'Express Surface Route 14B High-Speed Transit',
    },
    {
      timestamp: '28-Oct 04:00 PM',
      location: 'Mumbai Air Cargo & Surface Transshipment Complex',
      activity: 'Manifest generated & pickup completed',
      status: 'COMPLETED',
      equipmentInfo: 'Apex Automated EDI Waybill Generated',
    },
  ],
};

export const RECORD_2_CRITICAL_DELAY: ShipmentData = {
  queryId: 'MSKU8421095',
  referenceNumber: 'YKK-IMP-2026-9041',
  mode: 'EXIM Ocean / Port Container (40ft High Cube)',
  commodity: 'Heavy-Duty Brass Fasteners & Zippers (40k pcs)',
  shipper: 'YKK Americas / Savannah Port',
  destination: 'Peenya Apparel Hub, Bengaluru (Dock B - Sewing Bay)',
  currentStatus: 'CRITICAL DELAY / CUSTOMS YARD HOLD',
  statusType: 'critical',
  currentLocation: 'APM Terminals Mumbai / GTI Nhava Sheva (Yard Block 4B)',
  expectedDelivery: '03-Nov-2026 at 18:00 IST (+96 Hours Delay)',
  originalPromisedEta: 'Today at 14:00 IST',
  revisedEta: '03-Nov-2026 at 18:00 IST (+96 Hours Delay)',
  delayHours: 96,
  demurrageWarning:
    'WARNING: Container past free-holding period. Demurrage accrual: ₹12,000/day. Sewing production line halted.',
  demurrageRate: '₹12,000 / Day past free time',
  lineImpact: 'Sewing line stoppage alert active at Peenya Apparel Hub Dock B',
  vesselOrVehicle: 'Vessel: ATLANTA EXPRESS (IMO 9481230) / Container: MSKU8421095',
  weightOrPieces: '40,000 Pcs / 1 Container (40ft HC) / 22,400 Kgs',
  progressStep: 3,
  milestones: [
    {
      timestamp: 'Today 09:15 AM',
      location: 'APM Terminals Mumbai / GTI Nhava Sheva (Yard Block 4B)',
      activity:
        'Discharged from Vessel ATLANTA EXPRESS; Staged at Nhava Sheva Yard',
      status: 'EXCEPTION',
      equipmentInfo: 'STS Gantry Crane 04 / Straddle Carrier SC-18 / Stack 4B-12',
    },
    {
      timestamp: 'Yesterday 11:00 PM',
      location: 'Customs Examination Area (JNPT ICD CFS Zone)',
      activity: 'Held for Customs Assessment & Physical Verification',
      status: 'ALERT',
      equipmentInfo: 'ICEGATE Customs Hold Flag #CUST-992-EXIM (Pending Clearance)',
    },
    {
      timestamp: '27-Oct 06:00 AM',
      location: 'Gateway Terminals India (GTI Nhava Sheva)',
      activity: 'Vessel Berthed at Gateway Terminals India (GTI)',
      status: 'COMPLETED',
      equipmentInfo: 'Berth #2, Pilot Boarding Completed 04:30 AM',
    },
    {
      timestamp: '22-Oct 08:00 AM',
      location: 'Port of Savannah, Georgia (USA)',
      activity: 'Port of Loading Departure (Savannah, USA)',
      status: 'COMPLETED',
      equipmentInfo: 'Ocean Bill of Lading BL-MSK-990281-US',
    },
  ],
};

export function getFallbackRecord(queryId: string): ShipmentData {
  const cleanId = queryId.trim().toUpperCase() || '140293810291';
  return {
    queryId: cleanId,
    referenceNumber: `REF-${cleanId.slice(-4)}-EXPR`,
    mode: 'Domestic Express Surface Cargo',
    commodity: 'Industrial Hardware & Electronics Consignment (Box Pack 12 Pcs)',
    shipper: 'TechLogix Distribution Hub, Pune (Maharashtra)',
    destination: 'Whitefield Depot / Electronic City, Bengaluru (Karnataka)',
    currentStatus: 'IN TRANSIT',
    statusType: 'in_transit',
    currentLocation: 'Pune Hub Hub Distribution Gateway (En Route Bengaluru)',
    expectedDelivery: 'Tomorrow at 11:00 IST',
    revisedEta: 'Tomorrow at 11:00 IST',
    vesselOrVehicle: 'Express Freight Vehicle #MH-12-Q-9921',
    weightOrPieces: '12 Packages / 145 Kgs',
    progressStep: 2,
    milestones: [
      {
        timestamp: 'Today 08:45 AM',
        location: 'Pune Highway Transit Checkpost (NH 48)',
        activity:
          'In transit between transit sorting hub (Vehicle #MH-12-Q-9921)',
        status: 'IN_TRANSIT',
        equipmentInfo: 'GPS Telematics Transponder ID #TRK-9921-ACTIVE',
      },
      {
        timestamp: 'Today 03:15 AM',
        location: 'Pune Central Sort Hub (Hadapsar)',
        activity: 'Departed Pune Central Hub',
        status: 'COMPLETED',
        equipmentInfo: 'Outbound Sorting Conveyor Bay #06',
      },
      {
        timestamp: 'Yesterday 09:00 PM',
        location: 'Pune Central Sort Hub (Hadapsar)',
        activity: 'Shipment processed and weighed at facility',
        status: 'COMPLETED',
        equipmentInfo: 'Volumetric Optical Scanner Scan-Station 3',
      },
      {
        timestamp: 'Yesterday 05:30 PM',
        location: 'Pune Regional Booking Center',
        activity: 'Pickup manifested & booked online',
        status: 'COMPLETED',
        equipmentInfo: 'Apex Digital Waybill Booking Portal',
      },
    ],
  };
}

export function lookupShipments(rawInput: string): ShipmentData[] {
  if (!rawInput.trim()) {
    return [RECORD_1_ON_TIME];
  }

  // Split comma or whitespace separated entries
  const ids = rawInput
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (ids.length === 0) {
    return [RECORD_1_ON_TIME];
  }

  return ids.slice(0, 5).map((id) => {
    const norm = id.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (norm === '21092924823') {
      return RECORD_1_ON_TIME;
    }
    if (norm === 'MSKU8421095') {
      return RECORD_2_CRITICAL_DELAY;
    }
    return getFallbackRecord(id);
  });
}
