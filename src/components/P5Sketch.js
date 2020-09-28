import React, { useEffect, useRef } from "react"
import { Flex, Box, Heading } from 'theme-ui'
import CenterContainer from '../components/CenterContainer'
import p5 from "p5"

const P5Sketch = ({ sketch }) => {
  const sketchEl = useRef(null);
  useEffect(() => {
    while (sketchEl.current.hasChildNodes()) {
      sketchEl.current.removeChild(sketchEl.current.lastChild);
    }
    new p5(sketch, sketchEl.current)
    /* return cleanup */
  }, [sketch]);
  return <div ref={sketchEl} />
}


export default P5Sketch;