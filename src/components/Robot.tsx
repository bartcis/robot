import React from 'react';
import { Sprite, withApp } from 'react-pixi-fiber';
import robot from './robot.png';
import * as PIXI from 'pixi.js';

interface IProps {
  app: object;
  y: number;
  x: number;
  rotation: any;
}

const centerAnchor = new PIXI.Point(0.5, 0.5);

const Robot = (props: IProps) => {
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
