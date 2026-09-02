// QuotesContext.tsx (provided - Day 3, drop into src/context/QuotesContext.tsx)
// CONTEXT + useReducer: one shared home for the quotes list, so components
// read and update it without prop drilling. The provider also owns the data
// loading now: the same useEffect fetch you wired this morning moved here,
// which is what "refactor without changing behavior" looks like. You drop it
// in; you don't modify it.
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { Quote } from "../types";

type Action =
  | { type: "loaded"; quotes: Quote[] }
  | { type: "add"; quote: Quote };

function quotesReducer(state: Quote[], action: Action): Quote[] {
  switch (action.type) {
    case "loaded":
      return action.quotes;
    case "add":
      return [action.quote, ...state];
    default:
      return state;
  }
}

interface QuotesContextValue {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  addQuote: (quote: Quote) => void;
}

const QuotesContext = createContext<QuotesContextValue | null>(null);

export function QuotesProvider({ children }: { children: ReactNode }) {
  const [quotes, dispatch] = useReducer(quotesReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadQuotes() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/quotes.json", { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Quote[] = await res.json();
        dispatch({ type: "loaded", quotes: data });
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Could not load recent quotes.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadQuotes();
    return () => controller.abort(); // cleanup: cancel if unmounted
  }, []);

  const addQuote = (quote: Quote) => dispatch({ type: "add", quote });

  return (
    <QuotesContext.Provider value={{ quotes, loading, error, addQuote }}>
      {children}
    </QuotesContext.Provider>
  );
}

// A small custom hook that wraps useContext, the recommended pattern.
export function useQuotes(): QuotesContextValue {
  const ctx = useContext(QuotesContext);
  if (!ctx) {
    throw new Error("useQuotes must be used within a QuotesProvider");
  }
  return ctx;
}
