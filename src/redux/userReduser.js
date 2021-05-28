


const initialState = {
	cart: []
}

const userReduser = (state = initialState, action) => {
	const { type, payload } = action

	switch(type) {
		case 'SET_USER_DATA':
			return { ...state, ...payload }
		default:
			return state
	}
}

export const setUserData = (payload) => ({
	type: 'SET_USER_DATA', payload
})

export const addToCart = (item) => (dispatch, getState) => {
	const cart = getState().userData.cart
	const updateCart = [ ...cart, item ]
	localStorage.setItem('cart', JSON.stringify({updateCart}))
	/* чтоб вытянуть от сюда данные нужно json parse */
	dispatch(setUserData({ cart: updateCart }))
}

export default userReduser