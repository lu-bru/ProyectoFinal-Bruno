import React, { createContext, useState } from "react";
const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const newObj = {
        ...productToAdd,
        quantity
    }
    if(isInCart(newObj.id)) {
      const carritoActualizado = cart.map((el) => {
        if (el.id === newObj.id) {
          el.quantity += newObj.quantity
        }
        return el
    })
    setCart(carritoActualizado)
    } else {
    setCart([...cart, newObj])
  }
}
  const isInCart = (id) => {
    return cart.some((el) => el.id === id)
  }
  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    return total
  }
  const removeItem = (id) => {
    const deleteItem = cart.filter((el) => el.id !== id)
    setCart([...deleteItem])
  }
  const clearCart = () => {
    setCart([])
  }
  const getQuantity = () => {
    let count = 0
    cart.forEach((el) => {
      count = count + el.quantity
    })
    return count
  }

  const decrementItem = (productId) => {
    const updatedCart = cart.map((el) => {
      if (el.id === productId) {
        const newQuantity = Math.max(el.quantity - 1, 1)
        return {...el, quantity: newQuantity}
      }
      return el
    })
    setCart(updatedCart)
  }

  const incrementItem = (productId, stock) => {
    const updatedCart = cart.map((el) => {
      if (el.id === productId) {
        const newQuantity = Math.min(el.quantity +1, stock)
        return {...el, quantity: newQuantity}
      }
      return el
    })
    setCart(updatedCart)
  }

  return (
    <Context.Provider value={{ cart, setCart, addItem, getTotal, removeItem, clearCart, getQuantity, decrementItem, incrementItem }}>{children}</Context.Provider>
  );
};

export default Context