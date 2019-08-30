import { FETCH_QUOTE } from '../actions/quoteActions';

const initialState = {
  quote: {
    quote: '',
    characterName: '',
    characterImage: ''
  },
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_QUOTE:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
};
