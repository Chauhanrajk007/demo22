export type SearchMode = 'waybill' | 'reference';

export interface Milestone {
  timestamp: string;
  location: string;
  activity: string;
  status: 'COMPLETED' | 'IN_TRANSIT' | 'EXCEPTION' | 'ALERT';
  equipmentInfo?: string;
}

export interface ShipmentData {
  queryId: string;
  referenceNumber?: string;
  mode: string;
  commodity: string;
  shipper: string;
  destination: string;
  currentStatus: string;
  statusType: 'success' | 'critical' | 'in_transit';
  currentLocation: string;
  expectedDelivery: string;
  originalPromisedEta?: string;
  revisedEta?: string;
  delayHours?: number;
  demurrageWarning?: string;
  demurrageRate?: string;
  lineImpact?: string;
  vesselOrVehicle?: string;
  weightOrPieces?: string;
  progressStep: number; // 1 to 5
  milestones: Milestone[];
}
