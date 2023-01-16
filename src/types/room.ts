import { Agent } from "./agent";
import { Group } from "./group";
import { Hotel } from "./hotel";
import { Payment } from "./payment";
import { Transfer } from "./transfer";
import { Traveller } from "./traveller";

export interface Room {
  id: string;
  roomName: string;
  travelDate: Date;
  travelStartDate: Date;
  travelEndDate: Date;
  travelNights: number;
  totalPackageAmount: string;
  totalPaidToTZ: string;
  depositChecked: string;
  remainingBalance: string;
  supplier: string;
  finalPaymentDue: Date;
  insuranceSupplier: string;
  transferCompany: string;
  destination: string;
  roomType: string;
  transferInfo: string;
  agentId: string;
  origin: string;
  vacationType: string;
  weddingDate2: Date;
  weddingDate: Date;
  daysTillTravel: number;
  daysTillFinalPaymentDue: number;
  roomStatus: string;
  tzTransfer: string;
  transferType: string;
  tzPackage: string;
  bookingNumber: string;
  ptidPricingType: string;
  balanceChecked: string;
}

export type RoomInfo = {
  group: Group[];
  room: Room[];
  hotel: Hotel[];
  travelers: Traveller[];
  payments: Payment[];
  transfer: Transfer[];
  agent: Agent | null;
}[];
