import { create } from 'zustand';

export interface CartItem {
  quantity: number;
  price_id: string;
  product_img: string[];
}

export interface Product {
  product_id: string;
  price_id: string;
  product_price: number;
  product_desc: any;
  product_name: string;
  product_img: string[];
  metadata: object;
}

interface CartState {
  cart: CartItem[];
  product: Product;
  productList: object[];
  quantityCount: number;
  totalAmount: number | string;
  selectedItemIndex: number | null;
  setProductList: (params: { newProductList: object[] }) => void;
  setSelectedItemIndex: (params: { itemIndex: number | null }) => void;
  setProduct: (params: { newProduct: Product }) => void;
  setQuantityCount: (params: { newQuantityCount: number }) => void;
  setTotalAmount: (params: { newTotalAmount: number | string }) => void;
  addItemToCart: (params: { newItem: CartItem }) => void;
  removeItemFromCart: (params: { itemIndex: number }) => void;
  emptyCart: () => void;
  increaseItemQuantity: (params: { itemIndex: number }) => void;
  decreaseItemQuantity: (params: { itemIndex: number }) => void;
}

export const useCart = create<CartState>()((set, get) => ({
  cart: [],
  product: {
    product_id: '',
    price_id: '',
    product_price: 0,
    product_desc: '',
    product_name: '',
    product_img: [''],
    metadata: {},
  },
  quantityCount: 1,
  totalAmount: 0,
  selectedItemIndex: null,
  productList: [],

  setProductList: (params) => {
    const { newProductList } = params;
    set((state) => {
      return {
        ...state,
        productList: newProductList,
      };
    });
  },

  setSelectedItemIndex: (params) => {
    const { itemIndex } = params;
    set((state) => {
      return {
        ...state,
        selectedItemIndex: itemIndex,
      };
    });
  },

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

  increaseItemQuantity: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.map((element, elementIndex) => {
        if (elementIndex === itemIndex) {
          return { ...element, quantity: element.quantity + 1 };
        } else {
          return element;
        }
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  decreaseItemQuantity: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.map((element, elementIndex) => {
        if (elementIndex === itemIndex) {
          return { ...element, quantity: element.quantity - 1 };
        } else {
          return element;
        }
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

interface ModalState {
  showSideNav: boolean;
  setShowSideNav: () => void;
  isModalOpen: boolean;
  setModalOpen: () => void;
  isSideCartOpen: boolean;
  setSideCartOpen: () => void;
}

export const useModal = create<ModalState>()((set, get) => ({
  isModalOpen: false,
  isSideCartOpen: false,
  showSideNav: false,

  setModalOpen: () => {
    set((state) => {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    });
  },

  setSideCartOpen: () => {
    set((state) => {
      return {
        ...state,
        isSideCartOpen: !state.isSideCartOpen,
      };
    });
  },

  setShowSideNav: () => {
    set((state) => {
      return {
        ...state,
        showSideNav: !state.showSideNav,
      };
    });
  },
}));

// interface utilityState {}

// export const useUtility = create<utilityState>()((set, get) => ({}));
