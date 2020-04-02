import { VIEW_ALL_TODOS } from "../types.js"

export default (state, action) => {
  switch (action.type) {
    default:
      return state

    case VIEW_ALL_TODOS:
      return {
        ...state
      }

    case "TEST":
      console.log(action.payload)
      break
  }
}
