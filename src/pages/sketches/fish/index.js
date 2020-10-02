
import React, { useState } from 'react';
import thumbnail from './thumbnail.png';
import P5Sketch from '../../../components/P5Sketch'
import { Flex, Box, Label, Heading, Slider, Divider, Text } from 'theme-ui';

const FishSketch = (p, centerHue, hueVariance, amplitude = 40) => {
  let x = 100;
  let y = 100;
  // const centerHue = p.randomGaussian(160, 80);

  const makeLine = () => {
    p.strokeWeight(p.randomGaussian(.5, .5));
    p.blendMode(p.MULTIPLY);
    const hue = (Math.round(p.randomGaussian(centerHue, hueVariance)) + 360) % 360;
    let c = p.color(`hsla(${hue}, 100%, 50%, 0.4)`);

    p.stroke(c);
    p.noFill();
    // p.fill(c);
    p.ellipse(56, 46, 55, 55);

  }

  p.setup = () => {
    p.createCanvas(600, 400);
    // p.background(255, 204, 0);
    // p.background(0);
    p.frameRate(2);
    // p.noLoop();
  };

  p.draw = () => {
    p.blendMode(p.BLEND);
    p.clear();
    for(let y = 0; y < 25; y++) {
      for(let x = 0; x < 15; x++) {
        // makeLine(centerHue);
        let hue = (Math.round(p.randomGaussian(centerHue, hueVariance)) + 360) % 360;
        let c = p.color(`hsla(${hue}, 100%, 50%, 0.05)`);
        p.stroke(c);
        // p.noFill();
        p.fill(0);
        p.ellipse(x * 50 + (y % 2) * 25, 410 - y * 20 + 3, 50, 50);
      }
      for(let x = 0; x < 15; x++) {
        // makeLine(centerHue);
        let hue = (Math.round(p.randomGaussian(centerHue, hueVariance)) + 360) % 360;
        let c = p.color(`hsla(${hue}, 100%, 50%, 0.4)`);
        p.stroke(c);
        // p.noFill();
        p.fill(0);
        p.ellipse(x * 50 + (y % 2) * 25, 410 - y * 20, 50, 50);
      }
    }
    p.blendMode(p.SOFT_LIGHT);
    p.fill('rgba(208, 2, 7, .8)');
    p.rect(0, 0, 600, 400);
  };

  p.windowResized = () => {
    p.resizeCanvas(600, 400);
  }
}

export { thumbnail };


export default () => {
  return (
    <>
    <Box mx={4} mt={4}>
      <P5Sketch sketch={(p) => FishSketch(p, 220, 30, 10)} />
      <Text>Fish</Text>
    </Box>
    </>
  );
}

