import React from 'react';
import { Sprite, withApp } from 'react-pixi-fiber';
import RobotIcon from './robot.png';
import * as PIXI from 'pixi.js-legacy';

interface IProps {
  app: object;
  y: number;
  x: number;
  rotation: any;
}

const centerAnchor = new PIXI.Point(0.5, 0.5);

const Robot: React.ComponentType<any> = (props: IProps) => {
  return (
    <Sprite
      {...props}
      texture={PIXI.Texture.from(RobotIcon)}
      anchor={centerAnchor}
      width={70}
      height={50}
      interactive={true}
    />
  );
};

export default withApp(Robot);
