import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
	collection: null
}

const shopReducer = (state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;