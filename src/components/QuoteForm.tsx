// QuoteForm.tsx (provided - drop into src/components/QuoteForm.tsx on Day 2)
// A controlled form: three pieces of state, and the estimate recalculates on
// every keystroke. You wire it into App.tsx; you don't modify it.
import { useState } from "react";
import PremiumDisplay from "./PremiumDisplay";
import { calculatePremium } from "../premium";
import type { CoverageType } from "../types";

function QuoteForm() {
  const [type, setType] = useState<CoverageType>("auto");
  const [age, setAge] = useState(35);
  const [coverageAmount, setCoverageAmount] = useState(50000);

  const isValid = age >= 18 && age <= 100 && coverageAmount >= 10000;
  const premium = isValid ? calculatePremium(type, age, coverageAmount) : null;
  const error = isValid
    ? ""
    : "Enter age 18–100 and coverage of at least $10,000.";

  return (
    <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Build your quote</h2>

      <label htmlFor="coverage-type">Coverage type</label>
      <select
        id="coverage-type"
        value={type}
        onChange={(e) => setType(e.target.value as CoverageType)}
      >
        <option value="auto">Auto</option>
        <option value="home">Home</option>
        <option value="life">Life</option>
      </select>

      <label htmlFor="age">Your age</label>
      <input
        id="age"
        type="number"
        min={18}
        max={100}
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <label htmlFor="coverage-amount">Coverage amount ($)</label>
      <input
        id="coverage-amount"
        type="number"
        min={10000}
        step={5000}
        value={coverageAmount}
        onChange={(e) => setCoverageAmount(Number(e.target.value))}
      />

      <PremiumDisplay premium={premium} error={error} />

      {error && <p className="message">{error}</p>}
    </form>
  );
}

export default QuoteForm;
