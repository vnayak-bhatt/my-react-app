const stockSearchValue = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_FILTER':
            return action.searchValue;
        default:
            return state;

    }
};

export default stockSearchValue