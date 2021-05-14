import React from "react";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

// redux

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { smallImage } from "../util";

//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

//star rating
import StarsRating from "stars-rating";

const GameDetail = ({ pathId }) => {
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();
  //exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      // when you click out side the game detail it will go back to home
      document.body.style.overlow = "auto"; // enables scrolling
      history.push("/");
    }
  };

  //get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Ninento Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //   console.log(game)
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3>{game.name}</motion.h3>
                <motion.p>Rating: {game.rating}</motion.p>
                <StarsRating
                  count={Math.floor(game.rating)}
                  size={24}
                  color="#ffd700"
                />
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <h3 key={data.platform.id}>
                      <img
                        className="Icon"
                        src={getPlatform(data.platform.name)}
                        alt="icons"
                      />
                    </h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="img"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt="yes"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 5;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    width: 100%;
    margin-left: 3rem 0rem;
    padding: 0rem 1rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;


export default GameDetail;
