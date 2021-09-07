import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import ThreeStarCount from "./ThreeStarCount";
import OneStarCount from "./OneStarCount";
import TwoStarCount from "./TwoStarCount";
import { Carousel } from "react-bootstrap";
const _ = require("lodash");
export const StarCounts = () => {
  const fullList = useContext(ThemeContext);

  const oneStarList = _.filter(fullList, { starvalue: 1 });
  const twoStarList = _.filter(fullList, { starvalue: 2 });
  const threeStarList = _.filter(fullList, { starvalue: 3 });

  return (
    <Carousel className="countcarousel" fade pause="hover">
      <Carousel.Item>
        <ThreeStarCount className="starcount" starList={threeStarList} />
      </Carousel.Item>

      <Carousel.Item>
        <TwoStarCount className="starcount" starList={twoStarList} />
      </Carousel.Item>

      <Carousel.Item>
        <OneStarCount className="starcount" starList={oneStarList} />
      </Carousel.Item>
    </Carousel>
  );
};

export default StarCounts;
