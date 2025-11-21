import React from 'react'

import Hero from "./Hero"
import Author from "./Author"
import Write from "./Write"
import Books from "./Books"
import Podcasts from "./Podcast"
import Videos from "./Video"

function Home() {
  return (
  <>
    <Hero />
    <Author />
    <Write />
    <Books  />
    <Podcasts />
    <Videos />
  </>
  )
}

export default Home