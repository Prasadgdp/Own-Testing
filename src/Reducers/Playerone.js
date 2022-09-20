const initialState = {
    name: 'Durgaprasad',
    score: 100
}
export default function PlayeroneReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'INC_PLAYERONE_SCORE':
            return { ...state, score: state.score + 1 }
        case 'DEC_PLAYERONE_SCORE':
            return { ...state, score: state.score - 1 }
        case 'PLAYERONE_OWNSCORE':
            return { ...state, score: state.score + payload }
        default:
            return state;
    }
}