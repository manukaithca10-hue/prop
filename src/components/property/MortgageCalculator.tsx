"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, Calendar, PieChart } from "lucide-react";
import { calculateEMI, formatPrice } from "@/lib/utils";

interface MortgageCalculatorProps {
  initialPrice?: number;
  currency?: string;
}

export default function MortgageCalculator({
  initialPrice = 350000000,
  currency = "INR"
}: MortgageCalculatorProps) {
  const [propertyValue, setPropertyValue] = useState(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const downPayment = (propertyValue * downPaymentPercent) / 100;
  const loanAmount = propertyValue - downPayment;
  const { emi, totalInterest, totalPayment } = calculateEMI(loanAmount, interestRate, tenureYears);

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-gold-400/30 shadow-luxury space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center border border-gold-400/30">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-playfair text-2xl font-bold text-white">Private Mortgage Calculator</h3>
          <p className="text-xs text-neutral-400 font-light">Custom EMI & Private Wealth Financing Model</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sliders Form */}
        <div className="space-y-5">
          {/* Property Value */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300 uppercase tracking-wider font-mono">Estate Value:</span>
              <span className="text-gold-400 font-bold">{formatPrice(propertyValue, currency)}</span>
            </div>
            <input
              type="range"
              min="50000000"
              max="1000000000"
              step="10000000"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full accent-gold-400"
            />
          </div>

          {/* Down Payment % */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300 uppercase tracking-wider font-mono">
                Down Payment ({downPaymentPercent}%):
              </span>
              <span className="text-gold-400 font-bold">{formatPrice(downPayment, currency)}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-gold-400"
            />
          </div>

          {/* Interest Rate % */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300 uppercase tracking-wider font-mono">Annual Interest Rate:</span>
              <span className="text-gold-400 font-bold">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="15"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-gold-400"
            />
          </div>

          {/* Tenure Years */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300 uppercase tracking-wider font-mono">Loan Tenure:</span>
              <span className="text-gold-400 font-bold">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-gold-400"
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-dark-100/90 rounded-xl p-6 border border-gold-400/20 flex flex-col justify-between space-y-6">
          <div>
            <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-1">Estimated Monthly EMI</p>
            <h4 className="font-playfair text-3xl font-bold gold-gradient-text">
              {formatPrice(emi, currency)} <span className="text-xs font-sans text-neutral-400">/ mo</span>
            </h4>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-400">Principal Loan Amount:</span>
              <span className="text-white font-medium">{formatPrice(loanAmount, currency)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Total Interest Payable:</span>
              <span className="text-gold-300 font-medium">{formatPrice(totalInterest, currency)}</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t border-white/10">
              <span className="text-white">Total Outflow Amount:</span>
              <span className="text-gold-400">{formatPrice(totalPayment + downPayment, currency)}</span>
            </div>
          </div>

          {/* Visual Percentage Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
              <span>Principal ({( (loanAmount / totalPayment) * 100 ).toFixed(0)}%)</span>
              <span>Interest ({( (totalInterest / totalPayment) * 100 ).toFixed(0)}%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-dark-300 flex overflow-hidden">
              <div
                className="h-full bg-gold-400"
                style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
              />
              <div
                className="h-full bg-amber-700"
                style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
