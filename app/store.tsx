import { create } from 'zustand';

interface CartState {
  cart: any[];
  product: any;
  quantityCount: number;
  totalAmount: number | string;
  setProduct: (params: { newProduct: Product }) => void;
  setQuantityCount: (params: { newQuantityCount: number }) => void;
  setTotalAmount: (params: { newTotalAmount: number | string }) => void;
  addItemToCart: (params: { newItem: object }) => void;
  removeItemFromCart: (params: { itemIndex: number }) => void;
  emptyCart: () => void;
}

interface Product {
  product_id: string;
  product_price: number | null;
  product_desc: string | null;
  product_name: string;
  product_img: string[];
  metadata: object;
}

export const useCart = create<CartState>()((set, get) => ({
  cart: [],
  product: {},
  quantityCount: 0,
  totalAmount: 0,

  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        product: newProduct,
      };
    });
  },

  setQuantityCount: (params) => {
    const { newQuantityCount } = params;
    set((state) => {
      return {
        ...state,
        quantityCount: newQuantityCount,
      };
    });
  },

  setTotalAmount: (params) => {
    const { newTotalAmount } = params;
    set((state) => {
      return {
        ...state,
        totalAmount: newTotalAmount,
      };
    });
  },

  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    });
  },

  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  emptyCart: () => {
    set((state) => {
      const newCart: never[] = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}

export const useModal = create<ModalState>()((set, get) => ({
  isModalOpen: false,

  setIsModalOpen: () => {
    set((state) => {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    });
  },
}));
