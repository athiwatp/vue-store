export const addItemToBasket = ({dispatch, state}, item) => {
    const testBasketItems = state.basketItems.filter(i => {
        if(i.id === item.id) return i
    }).length === 0 
    if(testBasketItems) dispatch('ADD_ITEM_TO_BASKET', item)
}

export const removeItemFromBasket = ({dispatch}, id) => dispatch('REMOVE_ITEM_FROM_BASKET', id)