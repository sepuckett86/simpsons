import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING';
export const FETCH_QUOTE_REJECTED = 'FETCH_QUOTE_REJECTED';

export const fetchQuote = () => ({
  type: FETCH_QUOTE,
  payload: getQuote(),
  pendingType: FETCH_QUOTE_LOADING,
  rejectedType: FETCH_QUOTE_REJECTED
});

