import { createImageUrlBuilder } from '@sanity/image-url'
import { sanityClient } from "./client";

// Initialize the builder with your configured Sanity client
const builder = createImageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

export default urlFor
