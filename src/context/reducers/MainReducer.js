export const SET_DATA = 'SET_DATA'

export function MainReducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.data }
  }
}
