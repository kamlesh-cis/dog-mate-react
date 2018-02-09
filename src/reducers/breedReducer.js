export default function breedReducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_BREEDS":
      return action.payload;
    default:
      return state;
  }
}
