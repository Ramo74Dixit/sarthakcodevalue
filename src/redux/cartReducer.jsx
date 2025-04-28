const cartReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return state;
        } else {
          return [...state, action.payload]; 
        }
  
      case "REMOVE_FROM_CART":
        return state.filter((item) => item.id !== action.payload);
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  