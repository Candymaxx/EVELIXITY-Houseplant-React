import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {}, // key by id: { id, name, price, qty, thumb }
  totalCount: 0,
  totalPrice: 0
}

const recalc = (state) => {
  let count = 0
  let price = 0
  Object.values(state.items).forEach(i => { count += i.qty; price += i.qty * i.salePrice })
  state.totalCount = count
  state.totalPrice = price
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      if (state.items[item.id]) return
      state.items[item.id] = { ...item, qty: 1 }
      recalc(state)
    },
    increase: (state, action) => {
      const id = action.payload
      if (state.items[id]) { state.items[id].qty += 1 }
      recalc(state)
    },
    decrease: (state, action) => {
      const id = action.payload
      if (state.items[id]) { state.items[id].qty = Math.max(0, state.items[id].qty - 1); if (state.items[id].qty === 0) delete state.items[id] }
      recalc(state)
    },
    removeItem: (state, action) => {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
      recalc(state)
    },
    clearCart: (state) => {
      state.items = {}
      recalc(state)
    }
  }
})

export const { addItem, increase, decrease, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
