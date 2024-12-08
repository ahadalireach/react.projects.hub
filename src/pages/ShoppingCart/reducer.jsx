const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount > 0),
      };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    case "GET_TOTAL": {
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.total += price * amount;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, total: parseFloat(total.toFixed(2)), amount };
    }

    case "LOADING":
      return { ...state, loading: true };

    case "LOADING_ERROR":
      return { ...state, loading: false };

    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
};

export default reducer;
