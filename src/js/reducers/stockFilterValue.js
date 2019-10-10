const stockFilterValue = (state = false, action) => {
    switch(action.type) {
        case 'UPDATE_STOCK_FILTER':
            return action.stocked;
        default:
            return state;

    }
};

export default stockFilterValue