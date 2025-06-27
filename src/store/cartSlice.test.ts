
import cartReducer, {
  addToCart,
  removeFromCart,
  login,
  logout,
  updateCartQuantity
} from './cartSlice';

describe('cartSlice', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should handle addToCart (new item)', () => {
    const initialState = { cart: {}, isAuthenticated: false, token: null };
    const nextState = cartReducer(initialState, addToCart('123'));
    expect(nextState.cart['123']).toBe(1);
  });

  it('should increase quantity for existing item', () => {
    const initialState = { cart: { '123': 2 }, isAuthenticated: false, token: null };
    const nextState = cartReducer(initialState, addToCart('123'));
    expect(nextState.cart['123']).toBe(3);
  });

  it('should remove item from cart', () => {
    const initialState = { cart: { '123': 2 }, isAuthenticated: false, token: null };
    const nextState = cartReducer(initialState, removeFromCart('123'));
    expect(nextState.cart['123']).toBeUndefined();
  });

  it('should update quantity to new value', () => {
    const initialState = { cart: { '123': 2 }, isAuthenticated: false, token: null };
    const nextState = cartReducer(initialState, updateCartQuantity({ productId: '123', quantity: 5 }));
    expect(nextState.cart['123']).toBe(5);
  });

  it('should delete item if quantity set to 0', () => {
    const initialState = { cart: { '123': 2 }, isAuthenticated: false, token: null };
    const nextState = cartReducer(initialState, updateCartQuantity({ productId: '123', quantity: 0 }));
    expect(nextState.cart['123']).toBeUndefined();
  });

  it('should handle login', () => {
    const nextState = cartReducer(
      { cart: {}, isAuthenticated: false, token: null },
      login('token123')
    );
    expect(nextState.token).toBe('token123');
    expect(nextState.isAuthenticated).toBe(true);
  });

  it('should handle logout', () => {
    const nextState = cartReducer(
      { cart: {}, isAuthenticated: true, token: 'token123' },
      logout()
    );
    expect(nextState.token).toBeNull();
    expect(nextState.isAuthenticated).toBe(false);
  });

  it('should save updated cart to localStorage on addToCart', () => {
  const initialState = { cart: {}, isAuthenticated: false, token: null };
  const spy = jest.spyOn(Storage.prototype, 'setItem');

  const nextState = cartReducer(initialState, addToCart('123'));

  expect(spy).toHaveBeenCalledWith("cart", JSON.stringify({ '123': 1 }));
});

it('should update localStorage when item is removed from cart', () => {
  const initialState = { cart: { '123': 2 }, isAuthenticated: false, token: null };
  const spy = jest.spyOn(Storage.prototype, 'setItem');

  const nextState = cartReducer(initialState, removeFromCart('123'));

  expect(spy).toHaveBeenCalledWith("cart", JSON.stringify({}));
});

it('should set token in localStorage on login', () => {
  const initialState = { cart: {}, isAuthenticated: false, token: null };
  const spy = jest.spyOn(Storage.prototype, 'setItem');

  const nextState = cartReducer(initialState, login('token123'));

  expect(spy).toHaveBeenCalledWith("token", 'token123');
});

it('should remove token from localStorage on logout', () => {
  const initialState = { cart: {}, isAuthenticated: true, token: 'token123' };
  const spy = jest.spyOn(Storage.prototype, 'removeItem');

  const nextState = cartReducer(initialState, logout());

  expect(spy).toHaveBeenCalledWith("token");
});

});
