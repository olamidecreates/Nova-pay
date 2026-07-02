export type TransactionType = "send" | "receive" | "add-money" | "withdraw";
export type TransactionStatus = "completed" | "pending" | "failed";

export interface Transaction {
  id: string;
  type: TransactionType;
  counterparty: string;
  note?: string;
  amount: number;
  date: string; // ISO
  status: TransactionStatus;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  joined: string;
  balance: number;
  status: "active" | "suspended";
  kyc: "verified" | "pending" | "unverified";
}

export const currentUser = {
  id: "usr_001",
  name: "Ipaye Tesleemah Olamide",
  email: "olamide@novapay.demo",
  phone: "+234 812 345 6789",
  tag: "@olamide",
  avatarInitials: "IO",
  accountNumber: "8027461930",
  balance: 482650.75,
  currency: "₦",
  cardNumber: "5399 82** **** 4471",
  cardExpiry: "09/29",
  cardHolder: "IPAYE T. OLAMIDE",
  tier: "Nova Black",
};

export const transactions: Transaction[] = [
  { id: "txn_1001", type: "receive", counterparty: "Toyoola Ventures", note: "Invoice #204 payment", amount: 145000, date: "2026-07-01T09:24:00Z", status: "completed" },
  { id: "txn_1002", type: "send", counterparty: "Merit Medical Supplies", note: "Equipment deposit", amount: 62000, date: "2026-06-30T15:02:00Z", status: "completed" },
  { id: "txn_1003", type: "withdraw", counterparty: "GTBank •••4821", note: "ATM withdrawal", amount: 20000, date: "2026-06-29T11:47:00Z", status: "completed" },
  { id: "txn_1004", type: "add-money", counterparty: "Moniepoint Transfer", note: "Wallet top-up", amount: 100000, date: "2026-06-28T08:15:00Z", status: "completed" },
  { id: "txn_1005", type: "send", counterparty: "Yoola's Bite", note: "Catering order", amount: 18500, date: "2026-06-27T18:33:00Z", status: "completed" },
  { id: "txn_1006", type: "receive", counterparty: "Think Create Earn", note: "Design retainer", amount: 250000, date: "2026-06-25T13:09:00Z", status: "completed" },
  { id: "txn_1007", type: "send", counterparty: "Chidinma Okafor", note: "Split rent", amount: 45000, date: "2026-06-24T20:11:00Z", status: "pending" },
  { id: "txn_1008", type: "withdraw", counterparty: "Zenith Bank •••1190", amount: 30000, date: "2026-06-22T10:02:00Z", status: "failed" },
  { id: "txn_1009", type: "receive", counterparty: "Femi Adebayo", note: "Logo design fee", amount: 75000, date: "2026-06-20T09:47:00Z", status: "completed" },
  { id: "txn_1010", type: "add-money", counterparty: "Card •••4471", note: "Wallet top-up", amount: 50000, date: "2026-06-18T07:22:00Z", status: "completed" },
];

export const notifications: Notification[] = [
  { id: "ntf_1", title: "Money received", body: "You received ₦145,000.00 from Toyoola Ventures.", time: "2h ago", read: false },
  { id: "ntf_2", title: "Withdrawal successful", body: "₦20,000.00 was withdrawn to GTBank •••4821.", time: "1d ago", read: false },
  { id: "ntf_3", title: "New login detected", body: "A new sign-in was recorded on Chrome, Lagos.", time: "2d ago", read: true },
  { id: "ntf_4", title: "Card tip", body: "Your virtual card is ready for online payments.", time: "4d ago", read: true },
  { id: "ntf_5", title: "Statement ready", body: "Your June statement is ready to download.", time: "6d ago", read: true },
];

export const adminUsers: AdminUser[] = [
  { id: "u_01", name: "Ipaye Tesleemah Olamide", email: "olamide@novapay.demo", joined: "2025-11-02", balance: 482650.75, status: "active", kyc: "verified" },
  { id: "u_02", name: "Chidinma Okafor", email: "chidinma@novapay.demo", joined: "2025-12-14", balance: 128400.0, status: "active", kyc: "verified" },
  { id: "u_03", name: "Femi Adebayo", email: "femi@novapay.demo", joined: "2026-01-09", balance: 64200.5, status: "active", kyc: "pending" },
  { id: "u_04", name: "Blessing Nwosu", email: "blessing@novapay.demo", joined: "2026-02-21", balance: 9800.0, status: "suspended", kyc: "unverified" },
  { id: "u_05", name: "Kelechi Eze", email: "kelechi@novapay.demo", joined: "2026-03-03", balance: 355000.0, status: "active", kyc: "verified" },
  { id: "u_06", name: "Amaka Johnson", email: "amaka@novapay.demo", joined: "2026-04-18", balance: 21750.0, status: "active", kyc: "pending" },
  { id: "u_07", name: "Tunde Bakare", email: "tunde@novapay.demo", joined: "2026-05-27", balance: 5200.0, status: "suspended", kyc: "unverified" },
];

export const monthlyVolume = [
  { month: "Jan", volume: 2.1 },
  { month: "Feb", volume: 2.6 },
  { month: "Mar", volume: 3.0 },
  { month: "Apr", volume: 2.8 },
  { month: "May", volume: 3.6 },
  { month: "Jun", volume: 4.2 },
];

export const userGrowth = [
  { month: "Jan", users: 820 },
  { month: "Feb", users: 960 },
  { month: "Mar", users: 1120 },
  { month: "Apr", users: 1340 },
  { month: "May", users: 1610 },
  { month: "Jun", users: 1980 },
];

export const transactionMix = [
  { name: "Send", value: 38 },
  { name: "Receive", value: 34 },
  { name: "Add Money", value: 16 },
  { name: "Withdraw", value: 12 },
];

export const formatMoney = (amount: number, currency = "₦") =>
  `${currency}${amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
