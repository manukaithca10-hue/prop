import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amount: number,
  currency: string = "INR"
): string {
  if (currency === "INR") {
    // Format in Crores (Cr) or Lakhs (L) for Indian Rupees
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  if (currency === "USD") {
    const usdAmount = amount / 83; // approx conversion rate
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(usdAmount);
  }

  if (currency === "AED") {
    const aedAmount = (amount / 83) * 3.67;
    return `AED ${aedAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  }

  if (currency === "EUR") {
    const eurAmount = (amount / 83) * 0.92;
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(eurAmount);
  }

  return `₹${amount.toLocaleString()}`;
}

export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number
): { emi: number; totalInterest: number; totalPayment: number } {
  const r = annualInterestRate / 12 / 100;
  const n = tenureYears * 12;
  
  if (r === 0) {
    const emi = principal / n;
    return { emi, totalInterest: 0, totalPayment: principal };
  }

  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
  };
}
