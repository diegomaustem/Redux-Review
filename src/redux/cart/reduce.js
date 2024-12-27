import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // Verifica se o produto a ser inserido já esta no carrinho :::
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      // Se já estiver no carrinho, aumenta a quantidade em 1 :::
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      // Se não existir o produto no carrinho, então adiciona :::
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    default:
      return state;
  }
};

export default cartReducer;
