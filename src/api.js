//BASE URL
//API KEY

const base_url = `https://api.rawg.io/api/`;

//get current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`; // if month is a single digit add a 0 infront of it.
  } else {
    return month;
  }
};

//get current day
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`; // if month is a single digit add a 0 infront of it.
  } else {
    return day;
  }
};

// current day /month / year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popular games
const popularGames = `games?key=${process.env.REACT_APP_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailURL = (game_id) =>
  `${base_url}games/${game_id}?&key=${process.env.REACT_APP_KEY}`;
// `${base_url}games?/${game_id}?&key=${process.env.REACT_APP_KEY}`;
//game screens
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${process.env.REACT_APP_KEY}`;
  // search game
  export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}?&key=${process.env.REACT_APP_KEY}&page_size=10`

  
