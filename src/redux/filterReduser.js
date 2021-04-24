const SATE_AGE_FILTER = 'SATE_AGE_FILTER'

const initialState = {
    ageFilter: {},
    priceFilter: ''
}

const filterReduser = (state = initialState, action) => {
    switch (action.type) {
        case SATE_AGE_FILTER:
            return {
                ...state,
                ageFilter: action.filter
            }
        default:
            return state
    }
}

export const sateAgeFilter = (filter) => ({
    type: SATE_AGE_FILTER, filter
})



export default filterReduser