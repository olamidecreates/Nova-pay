"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import {
  currentUser,
  transactions as seedTransactions,
  notifications as seedNotifications,
  Transaction,
  Notification,
  TransactionType,
} from "@/lib/mockData";

interface WalletContextValue {
  balance: number;
  transactions: Transaction[];
  notifications: Notification[];
  unreadCount: number;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  simulate: (type: TransactionType, amount: number, counterparty: string, note?: string) => void;
  markAllRead: () => void;
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(currentUser.balance);
  const [txns, setTxns] = useState<Transaction[]>(seedTransactions);
  const [notifs, setNotifs] = useState<Notification[]>(seedNotifications);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // demo: start logged in

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const simulate = (
    type: TransactionType,
    amount: number,
    counterparty: string,
    note?: string
  ) => {
    const isCredit = type === "receive" || type === "add-money";
    setBalance((b) => (isCredit ? b + amount : b - amount));

    const newTxn: Transaction = {
      id: `txn_${Date.now()}`,
      type,
      counterparty,
      note,
      amount,
      date: new Date().toISOString(),
      status: "completed",
    };
    setTxns((prev) => [newTxn, ...prev]);

    const verbMap: Record<TransactionType, string> = {
      send: "Money sent",
      receive: "Money received",
      "add-money": "Wallet funded",
      withdraw: "Withdrawal successful",
    };
    const newNotif: Notification = {
      id: `ntf_${Date.now()}`,
      title: verbMap[type],
      body: `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2 })} ${
        isCredit ? "was added to" : "was debited from"
      } your wallet${counterparty ? ` — ${counterparty}` : ""}.`,
      time: "Just now",
      read: false,
    };
    setNotifs((prev) => [newNotif, ...prev]);
  };

  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));

  const unreadCount = notifs.filter((n) => !n.read).length;

  return (
    <WalletContext.Provider
      value={{
        balance,
        transactions: txns,
        notifications: notifs,
        unreadCount,
        isAuthenticated,
        login,
        logout,
        simulate,
        markAllRead,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
