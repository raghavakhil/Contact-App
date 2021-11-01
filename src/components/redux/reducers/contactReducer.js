const initialState = [
  {
    id: 0,
    name: "John",
    email: "john@dmail.com",
    phone: 454646464
  },
  {
    id: 1,
    name: "Tim",
    email: "tim@dmail.com",
    phone: 675470128
  }
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;
    case "DELETE_CONTACT":
      const filteredState = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredState;
      return state;
    default:
      return state;
  }
};
