import React from "react"
import { Grid,AspectRatio,  Box , Divider, Heading, Text, Button, AspectImage } from 'theme-ui'
import NavLink from '../components/NavLink';
import Link from '../components/Link';
import { thumbnail as wavyThingsThumbnail } from './sketches/wavy-things';
import { thumbnail as fishThumbnail } from './sketches/fish';

export default function Home() {
  return (
    <>
      <Box as="nav" p={4}>
        <NavLink to="/">Doodads</NavLink>
        {/*
        <NavLink to="/portfolio">Work things</NavLink>
        <NavLink to="/about">About me</NavLink>
        */}
      </Box>

      <Grid
        p={4}
        gap={4}
        columns={[2, '1fr 1fr']}>

        <Link to="/sketches/wavy-things">
          <AspectImage
            src={wavyThingsThumbnail}
            ratio={16/9}
            alt="wavy things"
          />
        </Link>
        <Link to="/sketches/fish">
          <AspectImage
            src={fishThumbnail}
            ratio={16/9}
            alt="fish"
          />
        </Link>

      </Grid>

    </>

  )
}
