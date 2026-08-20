// Sample data, typed as Quote[] (provided). Day 2 uses this bundled sample;
// on Day 3 the recent-quotes list switches to loading from the data feed
// (public/quotes.json) and this file is no longer imported.
import type { Quote } from "./types";

export const sampleQuotes: Quote[] = [
  { id: 1, type: "auto", age: 41, coverageAmount: 50000, monthlyPremium: 96.0 },
  { id: 2, type: "home", age: 52, coverageAmount: 250000, monthlyPremium: 375.0 },
  { id: 3, type: "life", age: 29, coverageAmount: 100000, monthlyPremium: 84.0 },
  { id: 4, type: "auto", age: 23, coverageAmount: 30000, monthlyPremium: 100.8 },
];
