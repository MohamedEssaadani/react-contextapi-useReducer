// Actions Types
export const ADD_BOOKING = "APP/BOOK_TABLE/ADD_BOOKING";

// initial state
export const initialState = {
  bookings: [],
};

// Add Book Action
export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

// Book Table Reducer
export const bookTableReducer = (state = initialState, action) => {
  // Add Booking
  if (action.type === ADD_BOOKING) {
    return {
      ...state,
      bookings: state.bookings.concat(action.booking),
    };
  }
};
