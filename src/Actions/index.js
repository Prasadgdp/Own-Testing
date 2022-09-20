export const incplayerone = () => async dispatch => {
    dispatch({
        type: 'INC_PLAYERONE_SCORE'
    })
}
export const decplayerone = () => async dispatch => {
    dispatch({
        type: 'DEC_PLAYERONE_SCORE'
    })
}
export const incplayertwo = () => async dispatch => {
    dispatch({
        type: 'INC_PLAYERTWO_SCORE'
    })
}
export const decplayertwo = () => async dispatch => {
    dispatch({
        type: 'DEC_PLAYERTWO_SCORE'
    })
}
export const playeroneownscore = (value) => async dispatch => {
    dispatch({
        type: 'PLAYERONE_OWNSCORE',
        payload: value
    })
}
export const playertwoownscore = (value) => async dispatch => {
    dispatch({
        type: 'PLAYERTWO_OWNSCORE',
        payload: value
    })
}