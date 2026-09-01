// The premium logic, typed (provided). The components call this; you never
// modify the function. The BASE_RATES values are a placeholder pricing model;
// on Day 2 you update the values (values only) to match the project sponsor's
// rate decision.
import type { CoverageType } from "./types";

const BASE_RATES: Record<CoverageType, number> = {
  auto: 85,
  home: 130,
  life: 65,
};

export function calculatePremium(
  type: CoverageType,
  age: number,
  coverageAmount: number
): number {
  const base = BASE_RATES[type] ?? 100;
  const ageFactor = age < 25 ? 1.4 : age > 60 ? 1.25 : 1.0;
  const coverageFactor = coverageAmount / 10000;
  return base * ageFactor * coverageFactor;
}

export function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
