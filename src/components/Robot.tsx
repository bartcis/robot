import React from 'react';
import { Sprite, withApp } from 'react-pixi-fiber';
import robot from './robot.png';
import * as PIXI from 'pixi.js';

interface IProps {
  grid: {
    width: number;
    height: number;
    unitSize: number;
  };
}

const centerAnchor = new PIXI.Point(0.5, 0.5);

const Robot = props => {
  return (
    <Sprite
      {...props}
      texture={PIXI.Texture.from(robot)}
      anchor={centerAnchor}
      width={70}
      height={50}
      interactive={true}
    />
  );
};

export default withApp(Robot);
