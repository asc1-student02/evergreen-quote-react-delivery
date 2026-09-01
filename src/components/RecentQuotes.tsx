// RecentQuotes.tsx (provided - drop into src/components/RecentQuotes.tsx on
// Day 2). Receives the quotes list through a typed prop and renders it.
//
// NOTE from the engineering team: QA flagged a display bug in this component:
// the coverage-type labels render empty. The TypeScript compiler knows exactly
// why. Run `npm run type-check` and read what it says; the one-line fix is in
// the kit README.
import { formatCurrency } from "../premium";
import type { Quote } from "../types";

interface RecentQuotesProps {
  quotes: Quote[];
  heading?: string;
}

function RecentQuotes({ quotes, heading = "Recent quotes" }: RecentQuotesProps) {
  return (
    <aside className="recent-quotes">
      <h2>{heading}</h2>
      <ul className="recent-list">
        {quotes.map((quote) => (
          <li key={quote.id}>
            <span className="quote-type">{quote.type}</span> -{" "}
            <span className="quote-premium">
              {formatCurrency(quote.monthlyPremium)}/mo
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default RecentQuotes;
