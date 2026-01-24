import { useEffect, useState } from 'react'
import { sanityClient } from './client'

type UseSanityQueryParams = {
  type: string
  slug?: string
  limit?: number
}

export function useSanityQuery<T>({
  type,
  slug,
  limit,
}: UseSanityQueryParams) {
  const [data, setData] = useState<T[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!type) return

    setLoading(true)
    setError(null)

    const filters: string[] = [`_type == "${type}"`]

    if (slug) {
      filters.push(`slug.current == "${slug}"`)
    }

    const limitClause = limit ? `[0...${limit}]` : ''

    const query = `*[
      ${filters.join(' && ')}
    ]${limitClause}`

    sanityClient
      .fetch<T[]>(query)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [type, slug, limit])

  return { data, loading, error }
}
