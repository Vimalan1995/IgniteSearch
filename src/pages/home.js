import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";

import GameDetail from "../components/GameDetail";
//styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//location
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  //get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2]; //get id

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { id } = useParams();

  useEffect(() => {
    id
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [id]); // checks id if id true hide scroll bar else enable

  //Get that data from dispatch
  const { popular, newGames, upComing, searched } = useSelector(
    (state) => state.games
  ); //deconstruct to get specific

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                screenshots={game.short_screenshots}
                key={game.id}
              />
            ))}
          </Games>
        </div>
        ) : "" }  {/* use conditional to render out search */}
        <h2>Upcoming Games</h2>
        <Games>
          {upComing.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
