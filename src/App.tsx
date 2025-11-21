import React from "react"

import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Index"
import BooksAll from "./pages/books/BooksAll"
import VideosAll from "./pages/videos/VideosAll"
import PodcastsAll from "./pages/podcasts/PodcastsAll"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BooksAll />} />
      <Route path="/videos" element={<VideosAll />} />
      <Route path="/podcasts" element={<PodcastsAll />} />
    </Routes>
  )
}

export default App
