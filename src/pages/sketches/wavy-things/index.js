
import React, { useState } from 'react';
import thumbnail from './thumbnail.png';
import P5Sketch from '../../../components/P5Sketch'
import { Flex, Box, Label, Heading, Slider, Divider, Text } from 'theme-ui';

const BasicSketch = (p, centerHue, hueVariance, amplitude = 40) => {
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
    p.beginShape();

    const points = [{ x: -100, y: 150 }];
    let x = -100;
    for(x; (x - 200)< document.documentElement.clientWidth; x += 100 ) {
      points.push({
        x, y: p.randomGaussian(150, amplitude),
      })
    }
    points.push({ x, y: 150 });
    p.vertex(0, 300);
    points.forEach(({ x, y }, index) => {
      p.curveVertex(x, y)
    });
    p.vertex(x, 300);
    p.endShape();
  }

  p.setup = () => {
    p.createCanvas(document.documentElement.clientWidth, 300);
    // p.background(255, 204, 0);
    // p.background(0);
    // p.frameRate(10);
    p.noLoop();
  };

  p.draw = () => {
    p.clear();
    for(let i = 0; i < 10; i++) {
      makeLine(centerHue);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(document.documentElement.clientWidth, 300);
  }
}

export { thumbnail };

const ExampleSketches = React.memo(() => {
  return (
    <>
    <P5Sketch sketch={(p) =>BasicSketch(p, 350, 35)} />
    <P5Sketch sketch={(p) =>BasicSketch(p, 50, 15)} />
    <P5Sketch sketch={(p) =>BasicSketch(p, 170, 25)} />
    <P5Sketch sketch={(p) =>BasicSketch(p, 350, 35)} />
    <P5Sketch sketch={(p) =>BasicSketch(p, 50, 15)} />
    </>
  )
});

export default () => {
  const [hue, setHue] = useState(170);
  const [hueVariance, setHueVariance] = useState(25);
  const [amplitude, setAmplitude] = useState(40);

  return (
    <>
    <Box mx={4} mt={4}>
      <Heading my={3} as="h1">Wavy Things</Heading>
      <Text>A series of curves colored with a random gaussian function.</Text>
      <Flex mt={3}>
        <Box sx={{ mr: 2, p: 3, bg: 'muted' }}>
          <Label>Hue {hue}</Label>
          <Slider
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            min={0}
            max={360}
          />
        </Box>
        <Box sx={{ mr: 2, p: 3, bg: 'muted' }}>
        <Label>Hue Variance {hueVariance}</Label>
          <Slider
            value={hueVariance}
            onChange={(e) => setHueVariance(Number(e.target.value))}
            min={0}
            max={360}
          />
        </Box>
        <Box sx={{ mr: 2, p: 3, bg: 'muted' }}>
          <Label>Amplitude {amplitude}</Label>
          <Slider
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            min={0}
            max={100}
          />
        </Box>
      </Flex>
    </Box>
    <P5Sketch sketch={(p) => BasicSketch(p, hue, hueVariance, amplitude)} />
    <Divider />
    <ExampleSketches />
    </>
  );
}

