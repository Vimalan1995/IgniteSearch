import React from "react";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
//media resize
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString()
  //load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={stringPathId } onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3>{name}</motion.h3>
        <motion.p>{released}</motion.p>
        <motion.img layoutId={`image ${stringPathId }`} src={smallImage(image,640)} alt={image} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
