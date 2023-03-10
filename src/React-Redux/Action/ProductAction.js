import Actiontypes from "../Contain/Action-type"

const setProducts = (products) => {
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload:products,
    };
};

const selectedProducts = (product) => {
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload:product,
    };
};

const removeselectedProducts = () => {
    return{
        type:Actiontypes.REMOVE_SELECTED_PRODUCT,
    };
};

export {setProducts,selectedProducts,removeselectedProducts};