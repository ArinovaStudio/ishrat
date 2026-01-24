import React from 'react'

import Hero from "./Hero"
import Author from "./Author"
import Write from "./Write"
import Books from "./Books"
import Podcasts from "./Podcast"
import Videos from "./Video"
import Shop from './Shop'
import Blogs from './Blogs'
import PressPage from './PressPage'

function Home() {
  return (
  <>
    <Hero />
    <Author />
    <Write />
    <Books  />
    <Podcasts />
    <Videos />
    <Blogs />
    <PressPage />
    <Shop />
  </>
  )
}

export default Home