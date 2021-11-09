const URL = '/api/greetings';

// Action types
const LOAD_GREETING = 'LOAD_GREETING';

const initialState = {
  message: '',
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return action.payload;
    default:
      return state;
  }
};

// Action Creators
export const loadGreeting = () => async (dispatch) => {
  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const payload = await res.json();
  dispatch({ type: LOAD_GREETING, payload });
};
