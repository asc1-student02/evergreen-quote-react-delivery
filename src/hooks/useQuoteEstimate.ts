// useQuoteEstimate.ts (provided - Day 3, drop into src/hooks/useQuoteEstimate.ts)
// A CUSTOM HOOK: the form's stateful logic extracted into a reusable home.
// Any component can now manage a quote estimate by calling useQuoteEstimate().
// You drop it in; you don't modify it.
import { useState } from "react";
import { calculatePremium } from "../premium";
import type { CoverageType } from "../types";

export function useQuoteEstimate() {
  const [type, setType] = useState<CoverageType>("auto");
  const [age, setAge] = useState(35);
  const [coverageAmount, setCoverageAmount] = useState(50000);

  const isValid = age >= 18 && age <= 100 && coverageAmount >= 10000;
  const premium = isValid ? calculatePremium(type, age, coverageAmount) : null;
  const error = isValid
    ? ""
    : "Enter age 18–100 and coverage of at least $10,000.";

  return {
    type,
    setType,
    age,
    setAge,
    coverageAmount,
    setCoverageAmount,
    premium,
    error,
    isValid,
  };
}
