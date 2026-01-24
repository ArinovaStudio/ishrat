import { useState, useEffect } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import urlFor from '../../lib/ImageBuilder'
import { useSanityQuery } from '../../lib/useSanityQuery'

type BlogType = {
  mainImage: string;
  title: string;
  description: string;
  publishedAt: string;
  body: any
}

// Custom components for rendering Sanity block content
const RichTextRenderer = ({ blocks }) => {
  if (!blocks) return null

  return blocks.map((block, index) => {
    // Handle images
    if (block._type === 'image') {
      return (
        <div key={index} className="my-8">
          <img
            src={urlFor(block).width(800).url()}
            alt={block.alt || 'Blog image'}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {block.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">
              {block.caption}
            </p>
          )}
        </div>
      )
    }

    // Handle text blocks
    if (block._type === 'block') {
      const children = block.children?.map((child, childIndex) => {
        let text = child.text

        // Apply marks (bold, italic, etc.)
        if (child.marks && child.marks.length > 0) {
          child.marks.forEach(mark => {
            if (mark === 'strong') {
              text = <strong key={childIndex} className="font-bold text-gray-900">{text}</strong>
            } else if (mark === 'em') {
              text = <em key={childIndex} className="italic">{text}</em>
            } else if (mark === 'code') {
              text = <code key={childIndex} className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">{text}</code>
            } else if (mark === 'underline') {
              text = <span key={childIndex} className="underline">{text}</span>
            }
          })
        }

        return <span key={childIndex}>{text}</span>
      })

      // Handle list items
      if (block.listItem === 'bullet') {
        return <li key={index} className="text-lg leading-relaxed ml-6">{children}</li>
      }
      if (block.listItem === 'number') {
        return <li key={index} className="text-lg leading-relaxed ml-6">{children}</li>
      }

      // Apply block styles
      switch (block.style) {
        case 'h1':
          return <h1 key={index} className="text-4xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
        case 'h2':
          return <h2 key={index} className="text-3xl font-bold mt-6 mb-3 text-gray-900">{children}</h2>
        case 'h3':
          return <h3 key={index} className="text-2xl font-semibold mt-5 mb-2 text-gray-900">{children}</h3>
        case 'h4':
          return <h4 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-900">{children}</h4>
        case 'blockquote':
          return <blockquote key={index} className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">{children}</blockquote>
        default:
          return <p key={index} className="text-lg leading-relaxed mb-4 text-gray-700">{children}</p>
      }
    }

    return null
  })
}

export default function BlogSlugPage() {
  const [slug, setSlug] = useState('')
  const [whichPage, setWhichPage] = useState(false);

  useEffect(() => {
    // Extract slug from URL
    const path = window.location.pathname    
    const isBlogPage = path.includes('/blogs/')
    setWhichPage(isBlogPage);
  const slugFromPath = path.split('/').pop()
    setSlug(slugFromPath || '')
  }, [])

  const { data, loading, error } = useSanityQuery<BlogType>({
    type: `${whichPage ? "blogs" : "press"}`,
    slug: slug,
  })

  const blog = data?.[0]

  const handleBack = () => {
    window.history.back()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-lg">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700">{error.message}</p>
          <button
            onClick={handleBack}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog Not Found</h2>
          <p className="text-gray-700 mb-4">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="sticky top-0 bg-white z-10">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          {blog.mainImage && (
            <div className="mb-6 sm:mb-8">
              <img
                src={urlFor(blog.mainImage).url()}
                alt={blog.title}
                className="w-full h-64 sm:h-140 object-cover"
              />
            </div>
          )}
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          
          {blog.description && (
            <p className="text-xl text-gray-600 mb-4">
              {blog.description}
            </p>
          )}
          
          {blog.publishedAt && (
            <time className="text-gray-600 text-sm sm:text-base">
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </header>
        <div className="w-full border border-gray-200 mb-3"></div>
        {/* Body Content */}
        <div className="prose prose-lg max-w-none">
          <RichTextRenderer blocks={blog.body} />
        </div>
      </article>
    </div>
  )
}