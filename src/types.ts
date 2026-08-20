// Shared types for the Evergreen quote app (provided).
// These are the contracts every provided piece is written against.
export type CoverageType = "auto" | "home" | "life";

export interface Quote {
  id: number;
  type: CoverageType;
  age: number;
  coverageAmount: number;
  monthlyPremium: number;
}
