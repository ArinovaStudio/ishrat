import {defineField, defineType} from 'sanity'
import {TiersIcon} from '@sanity/icons'

export default defineType({
  name: 'merch',
  title: 'Merch',
  type: 'document',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    
    defineField({
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
        defineField({
      name: 'buylink',
      title: 'Buy Link',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
