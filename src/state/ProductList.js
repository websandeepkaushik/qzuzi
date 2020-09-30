const initialState = {
    productList: {},
  }
  
  // Types
  export const SAVE_DATA = 'saveData'
  
  // Reducer
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_DATA:
        return { ...state, productList: action.payload.items }
      default:
        return state
    }
  }
  
  // Action creators
  export const saveResponseData = (response) => ({
    type: SAVE_DATA,
    payload: response,
  })
  
  export const saveResponseError = (response) => ({
    type: SAVE_DATA,
    payload: {},
  })
  
  // Selectors
  export const getProductList = (state) => state.productListReducer.productList;
  