const initState = {
  popular: [], // holds  an array of games
  newGames: [],
  upComing: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES": //dispatch action fetch games
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upComing: action.payload.upComing,
      }; //return all of the games
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [], // will empty the array
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
