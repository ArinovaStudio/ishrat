import {defineField, defineType} from 'sanity'
import {VideoIcon} from '@sanity/icons'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
        defineField({
      name: 'videolink',
      title: 'Video Link',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
