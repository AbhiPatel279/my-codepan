import Actiontypes from "../Contain/Action-type"

const intialstate = {
    products: [{
        id: 1,
        title: "Abhi",
        category: "coder",
    }]
}

const productReducer = (state = intialstate, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

const selectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export { productReducer, selectProductReducer };