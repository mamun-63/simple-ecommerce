export const initialState = {
  basket: [
    {
      id: '1',
      name: 'ASRock A320M-HDV',
      price: 89.99,
      profitPercentage: 130,
      category: 'Motherboard',
    },
    {
      id: '2',
      name: 'AMD DDR4 M255',
      price: 29.99,
      profitPercentage: 90,
      category: 'RAM',
    },
  ],
}

// now gonna create reducer

const reducer = (state, action) => {
  console.log(action) // thats really important to figure what we are getting from reducer / what reducer listening

  switch (action.type) {
    // listen action
    case 'ADD_TO_BASKET':
      console.log('action item > ', action.item.id)
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    case 'REMOVE_FROM_BASKET':
      console.log('removing id is ', action.id)

      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      )
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket,
      }

    default:
      return state
  }
}

export default reducer
